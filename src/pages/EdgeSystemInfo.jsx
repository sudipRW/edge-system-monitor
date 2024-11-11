import React, { useContext, useState, useEffect } from "react";
import { PortainerContext } from "../context-api/PortainerContext";
import { useParams, useNavigate } from "react-router-dom";
import {
  TextField,
  Switch,
  FormControlLabel,
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import { Done, InfoOutlined } from "../assets/icons";

const edgeId = uuidv4();

const StyledBox = styled(Box)({
  padding: "1rem",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  fontFamily: "monospace",
  fontSize: "0.9rem",
  overflowX: "auto",
});

const EdgeSystemInfo = () => {
  const { id } = useParams();
  const { fetchEdgeSystem, fetchAllGroups, fetchAllTags, updateEdgeSystem } =
    useContext(PortainerContext);
  const [edgeSystem, setEdgeSystem] = useState(null);
  const [error, setError] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [groups, setGroups] = useState([]);
  const [tags, setTags] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    groupId: "",
    tagIds: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEdgeSystem(id);
        setEdgeSystem(data);
        setFormData({
          name: data?.Name || "",
          groupId: data?.GroupId || "",
          tagIds: data?.TagIds || [],
        });

        const groups = await fetchAllGroups();
        const tags = await fetchAllTags();
        setGroups(groups);
        setTags(tags);
      } catch (e) {
        console.error("Error fetching edge system:", e);
        setError("Failed to load edge system data.");
      }
    };

    fetchData();
  }, [id, fetchEdgeSystem, fetchAllGroups, fetchAllTags]);

  const command = `docker run -d \\
    -v /var/run/docker.sock:/var/run/docker.sock \\
    -v /var/lib/docker/volumes:/var/lib/docker/volumes \\
    -v /:/host \\
    -v portainer_agent_data:/data \\
    --restart always \\
    -e EDGE=1 \\
    -e EDGE_ID=${edgeId} \\
    -e EDGE_KEY=${edgeSystem?.EdgeKey} \\
    -e EDGE_INSECURE_POLL=1 \\
    --name portainer_edge_agent \\
    portainer/agent:2.21.3`;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "tagIds"
          ? typeof value === "string"
            ? value.split(",")
            : value
          : value,
    }));
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(command)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  const handleUpdateEdgeSystem = async () => {
    try {
      const data = await updateEdgeSystem(edgeSystem?.Id, formData);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;
  if (!edgeSystem) return <div>Loading...</div>;
  return (
    <div className="pb-4">
      {edgeSystem?.EdgeID || edgeSystem?.Name === "local" ? (
        <div>
          {edgeSystem?.Name !== "local" && (
            <div className="bg-white p-6 space-y-4 rounded-lg shadow-sm associated flex flex-col">
              <Typography variant="h6">Edge Information</Typography>
              <div className="flex gap-1 items-center">
                <InfoOutlined
                  color="secondary"
                  sx={{ width: "20px", height: "20px" }}
                />
                <Typography variant="body2">
                  This Edge environment is associated with Docker.
                </Typography>
              </div>
              <Typography variant="body2">
                Edge Key: {edgeSystem?.EdgeKey}
              </Typography>
              <Typography variant="body2">
                Edge Identifier: {edgeSystem?.EdgeID}
              </Typography>
              <Button
                color="secondary"
                variant="outlined"
                sx={{ width: "100px" }}
              >
                Dissociate
              </Button>
            </div>
          )}

          <div className="bg-white p-6 space-y-6 rounded-lg shadow-sm associated flex flex-col mt-10">
            <Typography variant="h6">Configuration</Typography>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              color="secondary"
              fullWidth
            />

            <Typography variant="h6">Metadata</Typography>
            <FormControl fullWidth>
              <InputLabel id="group-label" color="secondary">
                Group
              </InputLabel>
              <Select
                labelId="group-label"
                name="groupId"
                color="secondary"
                label="Group"
                value={formData.groupId}
                onChange={handleInputChange}
              >
                {groups.map((group) => (
                  <MenuItem key={group?.Id} value={group?.Id}>
                    {group?.Name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="tags-label" color="secondary">
                Tags
              </InputLabel>
              <Select
                labelId="tags-label"
                id="tags-select"
                multiple
                name="tagIds"
                color="secondary"
                label="Tags"
                value={formData.tagIds}
                onChange={handleInputChange}
                renderValue={(selected) =>
                  tags
                    .filter((tag) => selected.includes(tag?.ID))
                    .map((tag) => tag?.Name)
                    .join(", ")
                }
              >
                {tags.map((tag) => (
                  <MenuItem key={tag?.ID} value={tag?.ID}>
                    <Checkbox
                      checked={formData.tagIds.includes(tag?.ID)}
                      color="secondary"
                    />
                    <ListItemText primary={tag?.Name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div className="flex gap-2">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleUpdateEdgeSystem}
              >
                Update Environment
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/edge-systems")}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 space-y-2 rounded-lg shadow-md disassociated flex flex-col gap-2">
          <Typography className="text-xl font-semibold">
            Edge Agent Deployment Script
          </Typography>
          <Typography color="secondary">Linux - Docker Standalone</Typography>
          <StyledBox>
            <pre>{command}</pre>
          </StyledBox>
          <div className="flex gap-4 items-center">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCopy}
              className="md:w-[100px]"
            >
              Copy
            </Button>
            {copied && (
              <Typography color="success">
                <Done color="success" /> copied
              </Typography>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EdgeSystemInfo;
