import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const PortainerContext = createContext();
const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

const PortainerProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [allEdgeSystems, setAllEdgeSystems] = useState([]);
  const [selectedEdgeSystem, setSelectedEdgeSystem] = useState([]);

  // Define a function to construct query parameters
  const buildQueryParams = (params) => {
    return Object.entries(params)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return value
            .map((v) => `${key}[]=${encodeURIComponent(v)}`)
            .join("&");
        }
        return `${key}=${encodeURIComponent(value)}`;
      })
      .join("&");
  };

  const fetchAllEdgeSystems = async (customParams = {}) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/endpoints";
    const method = "GET";
    const data = null;

    const params = {
      start: 1,
      limit: 10,
      order: "asc",
      types: [1, 2, 3, 4, 5, 6, 7],
      provisioned: true,
      tagsPartialMatch: true,
      updateInformation: false,
      ...customParams, // Merge with any custom parameters passed
    };

    const queryString = buildQueryParams(params);

    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}?${queryString}`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set content type for requests with data
        },
        data,
      });
      console.log(response.data);
      setAllEdgeSystems(response.data);
      return response.data; // Return the response data
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  const addEdgeSystem = async (name, monitoringSystemURL, groupId, tagIds) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/endpoints";
    const method = "POST";

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("EndpointCreationType", 4);
    formData.append("URL", monitoringSystemURL);
    formData.append("GroupID", groupId);
    if (Array.isArray(tagIds)) {
      tagIds.forEach((tagId) => {
        formData.append("TagIds", JSON.stringify(tagId));
      });
    }

    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}`,
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  const deleteEdgeSystems = async (formData) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/endpoints";
    const method = "DELETE";

    const body = {
      endpoints: formData,
    };

    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}`,
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: body,
      });
      return response;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  const fetchEdgeSystem = async (id) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/endpoints";
    const method = "GET";
    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}/${id}`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set content type for requests with data
        },
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  const updateEdgeSystem = async (id, formData) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/endpoints";
    const method = "PUT";
    const body = {
      Name: formData?.name || "",
      GroupID: formData?.groupId || null,
      TagIds: Array.isArray(formData?.tagIds) ? formData.tagIds : [],
    };

    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}/${id}`,
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: body,
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  const fetchAllContainers = async (id) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/endpoints";
    const method = "GET";
    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}/${id}/docker/containers`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set content type for requests with data
        },
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };
  const fetchAllImages = async (id) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/endpoints";
    const method = "GET";
    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}/${id}/docker/images`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set content type for requests with data
        },
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };
  const fetchAllVolumes = async (id) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/endpoints";
    const method = "GET";
    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}/${id}/docker/volumes`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set content type for requests with data
        },
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  const fetchAllGroups = async () => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/endpoint_groups";
    const method = "GET";
    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set content type for requests with data
        },
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };
  const fetchAllTags = async () => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/tags";
    const method = "GET";
    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set content type for requests with data
        },
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  const _ping = async (id) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = `/endpoints/${id}/docker/_ping`;
    const method = "GET";
    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set content type for requests with data
        },
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  const createGroup = async (formData) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/endpoint_groups";
    const method = "POST";
    const body = {
      name: formData?.name || "",
      description: formData?.description || "",
      associatedEndpoints: formData?.associatedEndpoints || [],
      tagIds: formData?.tagIds || [],
    };

    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set content type for requests with data
        },
        data: body,
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };
  const deleteGroup = async (id) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/endpoint_groups";
    const method = "DELETE";

    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}/${id}`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  const createTag = async (name) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/tags";
    const method = "POST";
    const body = {
      name: name,
    };

    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set content type for requests with data
        },
        data: body,
      });
      return response;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  const deleteTag = async (id) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/tags";
    const method = "DELETE";
  
    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}/${id}`, // Add query params to the URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  const fetchAllStacks = async (id) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/stacks";
    const method = "GET";
    const filters = JSON.stringify({
      EndpointID: id,
      IncludeOrphanedStacks: true,
    });

    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}?filters=${encodeURIComponent(filters)}`, // Add encoded filters to URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };
  const createStack = async (id, formData) => {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const endpoint = "/stacks/create/standalone/string";
    const method = "POST";
    const body = {
      name: formData?.name || "",
      stackFileContent: formData?.composeContent || "",
      env: formData?.env || [],
    };
    try {
      const response = await axios({
        url: `${apiBaseURL}${endpoint}?endpointId=${id}`, // Add encoded filters to URL
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: body,
      });
      return response.data;
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("API request failed:", error.response.data);
        throw new Error(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        console.error(
          "API request made but no response received:",
          error.request
        );
        throw new Error("No response from the server. Please try again later.");
      } else {
        console.error("Error setting up API request:", error.message);
        throw new Error(
          "Error in making API request. Please check your configuration."
        );
      }
    }
  };

  return (
    <PortainerContext.Provider
      value={{
        fetchAllEdgeSystems,
        allEdgeSystems,
        selectedEdgeSystem,
        setSelectedEdgeSystem,
        addEdgeSystem,
        fetchEdgeSystem,
        fetchAllContainers,
        fetchAllImages,
        fetchAllVolumes,
        fetchAllGroups,
        fetchAllTags,
        _ping,
        updateEdgeSystem,
        createGroup,
        createTag,
        fetchAllStacks,
        createStack,
        deleteEdgeSystems,
        deleteGroup,
        deleteTag,
      }}
    >
      {children}
    </PortainerContext.Provider>
  );
};

export { PortainerContext, PortainerProvider };
