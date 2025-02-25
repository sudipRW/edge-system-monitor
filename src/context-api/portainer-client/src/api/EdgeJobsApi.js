/*
 * PortainerCE API
 * Portainer API is an HTTP API served by Portainer. It is used by the Portainer UI and everything you can do with the UI can be done using the HTTP API. Examples are available at https://documentation.portainer.io/api/api-examples/ You can find out more about Portainer at [http://portainer.io](http://portainer.io) and get some support on [Slack](http://portainer.io/slack/).  # Authentication  Most of the API environments(endpoints) require to be authenticated as well as some level of authorization to be used. Portainer API uses JSON Web Token to manage authentication and thus requires you to provide a token in the **Authorization** header of each request with the **Bearer** authentication mechanism.  Example:  ``` Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE ```  # Security  Each API environment(endpoint) has an associated access policy, it is documented in the description of each environment(endpoint).  Different access policies are available:  - Public access - Authenticated access - Restricted access - Administrator access  ### Public access  No authentication is required to access the environments(endpoints) with this access policy.  ### Authenticated access  Authentication is required to access the environments(endpoints) with this access policy.  ### Restricted access  Authentication is required to access the environments(endpoints) with this access policy. Extra-checks might be added to ensure access to the resource is granted. Returned data might also be filtered.  ### Administrator access  Authentication as well as an administrator role are required to access the environments(endpoints) with this access policy.  # Execute Docker requests  Portainer **DO NOT** expose specific environments(endpoints) to manage your Docker resources (create a container, remove a volume, etc...).  Instead, it acts as a reverse-proxy to the Docker HTTP API. This means that you can execute Docker requests **via** the Portainer HTTP API.  To do so, you can use the `/endpoints/{id}/docker` Portainer API environment(endpoint) (which is not documented below due to Swagger limitations). This environment(endpoint) has a restricted access policy so you still need to be authenticated to be able to query this environment(endpoint). Any query on this environment(endpoint) will be proxied to the Docker API of the associated environment(endpoint) (requests and responses objects are the same as documented in the Docker API).  # Private Registry  Using private registry, you will need to pass a based64 encoded JSON string ‘{\"registryId\":\\<registryID value\\>}’ inside the Request Header. The parameter name is \"X-Registry-Auth\". \\<registryID value\\> - The registry ID where the repository was created.  Example:  ``` eyJyZWdpc3RyeUlkIjoxfQ== ```  **NOTE**: You can find more information on how to query the Docker API in the [Docker official documentation](https://docs.docker.com/engine/api/v1.30/) as well as in [this Portainer example](https://documentation.portainer.io/api/api-examples/). 
 *
 * OpenAPI spec version: 2.21.3
 * Contact: info@portainer.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EdgejobsEdgeJobCreateFromFileContentPayload', 'model/EdgejobsEdgeJobFileResponse', 'model/EdgejobsEdgeJobUpdatePayload', 'model/EdgejobsFileResponse', 'model/EdgejobsTaskContainer', 'model/PortainerEdgeGroup', 'model/PortainerEdgeJob'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EdgejobsEdgeJobCreateFromFileContentPayload'), require('../model/EdgejobsEdgeJobFileResponse'), require('../model/EdgejobsEdgeJobUpdatePayload'), require('../model/EdgejobsFileResponse'), require('../model/EdgejobsTaskContainer'), require('../model/PortainerEdgeGroup'), require('../model/PortainerEdgeJob'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.EdgeJobsApi = factory(root.PortainerCeApi.ApiClient, root.PortainerCeApi.EdgejobsEdgeJobCreateFromFileContentPayload, root.PortainerCeApi.EdgejobsEdgeJobFileResponse, root.PortainerCeApi.EdgejobsEdgeJobUpdatePayload, root.PortainerCeApi.EdgejobsFileResponse, root.PortainerCeApi.EdgejobsTaskContainer, root.PortainerCeApi.PortainerEdgeGroup, root.PortainerCeApi.PortainerEdgeJob);
  }
}(this, function(ApiClient, EdgejobsEdgeJobCreateFromFileContentPayload, EdgejobsEdgeJobFileResponse, EdgejobsEdgeJobUpdatePayload, EdgejobsFileResponse, EdgejobsTaskContainer, PortainerEdgeGroup, PortainerEdgeJob) {
  'use strict';

  /**
   * EdgeJobs service.
   * @module api/EdgeJobsApi
   * @version 2.21.3
   */

  /**
   * Constructs a new EdgeJobsApi. 
   * @alias module:api/EdgeJobsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the edgeJobCreate operation.
     * @callback module:api/EdgeJobsApi~edgeJobCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortainerEdgeGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an EdgeJob
     * **Access policy**: administrator
     * @param {module:model/String} method Creation Method
     * @param {Object} body for body documentation see the relevant /edge_jobs/create/{method} endpoint
     * @param {module:api/EdgeJobsApi~edgeJobCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortainerEdgeGroup}
     */
    this.edgeJobCreate = function(method, body, callback) {
      var postBody = body;

      // verify the required parameter 'method' is set
      if (method === undefined || method === null) {
        throw new Error("Missing the required parameter 'method' when calling edgeJobCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling edgeJobCreate");
      }


      var pathParams = {
      };
      var queryParams = {
        'method': method,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PortainerEdgeGroup;

      return this.apiClient.callApi(
        '/edge_jobs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeJobCreateFile operation.
     * @callback module:api/EdgeJobsApi~edgeJobCreateFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortainerEdgeGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an EdgeJob from a file
     * **Access policy**: administrator
     * @param {File} file Content of the Stack file
     * @param {String} name Name of the stack
     * @param {String} cronExpression A cron expression to schedule this job
     * @param {String} edgeGroups JSON stringified array of Edge Groups ids
     * @param {String} endpoints JSON stringified array of Environment ids
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.recurring If recurring
     * @param {module:api/EdgeJobsApi~edgeJobCreateFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortainerEdgeGroup}
     */
    this.edgeJobCreateFile = function(file, name, cronExpression, edgeGroups, endpoints, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling edgeJobCreateFile");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling edgeJobCreateFile");
      }

      // verify the required parameter 'cronExpression' is set
      if (cronExpression === undefined || cronExpression === null) {
        throw new Error("Missing the required parameter 'cronExpression' when calling edgeJobCreateFile");
      }

      // verify the required parameter 'edgeGroups' is set
      if (edgeGroups === undefined || edgeGroups === null) {
        throw new Error("Missing the required parameter 'edgeGroups' when calling edgeJobCreateFile");
      }

      // verify the required parameter 'endpoints' is set
      if (endpoints === undefined || endpoints === null) {
        throw new Error("Missing the required parameter 'endpoints' when calling edgeJobCreateFile");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': file,
        'Name': name,
        'CronExpression': cronExpression,
        'EdgeGroups': edgeGroups,
        'Endpoints': endpoints,
        'Recurring': opts['recurring']
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = PortainerEdgeGroup;

      return this.apiClient.callApi(
        '/edge_jobs/create/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeJobCreateString operation.
     * @callback module:api/EdgeJobsApi~edgeJobCreateStringCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortainerEdgeGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an EdgeJob from a text
     * **Access policy**: administrator
     * @param {module:model/EdgejobsEdgeJobCreateFromFileContentPayload} body EdgeGroup data when method is string
     * @param {module:api/EdgeJobsApi~edgeJobCreateStringCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortainerEdgeGroup}
     */
    this.edgeJobCreateString = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling edgeJobCreateString");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PortainerEdgeGroup;

      return this.apiClient.callApi(
        '/edge_jobs/create/string', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeJobDelete operation.
     * @callback module:api/EdgeJobsApi~edgeJobDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an EdgeJob
     * **Access policy**: administrator
     * @param {Number} id EdgeJob Id
     * @param {module:api/EdgeJobsApi~edgeJobDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.edgeJobDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling edgeJobDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/edge_jobs/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeJobFile operation.
     * @callback module:api/EdgeJobsApi~edgeJobFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EdgejobsEdgeJobFileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch a file of an EdgeJob
     * **Access policy**: administrator
     * @param {Number} id EdgeJob Id
     * @param {module:api/EdgeJobsApi~edgeJobFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EdgejobsEdgeJobFileResponse}
     */
    this.edgeJobFile = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling edgeJobFile");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EdgejobsEdgeJobFileResponse;

      return this.apiClient.callApi(
        '/edge_jobs/{id}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeJobInspect operation.
     * @callback module:api/EdgeJobsApi~edgeJobInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortainerEdgeJob} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect an EdgeJob
     * **Access policy**: administrator
     * @param {Number} id EdgeJob Id
     * @param {module:api/EdgeJobsApi~edgeJobInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortainerEdgeJob}
     */
    this.edgeJobInspect = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling edgeJobInspect");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PortainerEdgeJob;

      return this.apiClient.callApi(
        '/edge_jobs/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeJobList operation.
     * @callback module:api/EdgeJobsApi~edgeJobListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PortainerEdgeJob>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch EdgeJobs list
     * **Access policy**: administrator
     * @param {module:api/EdgeJobsApi~edgeJobListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PortainerEdgeJob>}
     */
    this.edgeJobList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PortainerEdgeJob];

      return this.apiClient.callApi(
        '/edge_jobs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeJobTaskLogsInspect operation.
     * @callback module:api/EdgeJobsApi~edgeJobTaskLogsInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EdgejobsFileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch the log for a specifc task on an EdgeJob
     * **Access policy**: administrator
     * @param {Number} id EdgeJob Id
     * @param {Number} taskID Task Id
     * @param {module:api/EdgeJobsApi~edgeJobTaskLogsInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EdgejobsFileResponse}
     */
    this.edgeJobTaskLogsInspect = function(id, taskID, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling edgeJobTaskLogsInspect");
      }

      // verify the required parameter 'taskID' is set
      if (taskID === undefined || taskID === null) {
        throw new Error("Missing the required parameter 'taskID' when calling edgeJobTaskLogsInspect");
      }


      var pathParams = {
        'id': id,
        'taskID': taskID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EdgejobsFileResponse;

      return this.apiClient.callApi(
        '/edge_jobs/{id}/tasks/{taskID}/logs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeJobTasksClear operation.
     * @callback module:api/EdgeJobsApi~edgeJobTasksClearCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clear the log for a specifc task on an EdgeJob
     * **Access policy**: administrator
     * @param {Number} id EdgeJob Id
     * @param {Number} taskID Task Id
     * @param {module:api/EdgeJobsApi~edgeJobTasksClearCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.edgeJobTasksClear = function(id, taskID, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling edgeJobTasksClear");
      }

      // verify the required parameter 'taskID' is set
      if (taskID === undefined || taskID === null) {
        throw new Error("Missing the required parameter 'taskID' when calling edgeJobTasksClear");
      }


      var pathParams = {
        'id': id,
        'taskID': taskID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/edge_jobs/{id}/tasks/{taskID}/logs', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeJobTasksCollect operation.
     * @callback module:api/EdgeJobsApi~edgeJobTasksCollectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Collect the log for a specifc task on an EdgeJob
     * **Access policy**: administrator
     * @param {Number} id EdgeJob Id
     * @param {Number} taskID Task Id
     * @param {module:api/EdgeJobsApi~edgeJobTasksCollectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.edgeJobTasksCollect = function(id, taskID, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling edgeJobTasksCollect");
      }

      // verify the required parameter 'taskID' is set
      if (taskID === undefined || taskID === null) {
        throw new Error("Missing the required parameter 'taskID' when calling edgeJobTasksCollect");
      }


      var pathParams = {
        'id': id,
        'taskID': taskID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/edge_jobs/{id}/tasks/{taskID}/logs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeJobTasksList operation.
     * @callback module:api/EdgeJobsApi~edgeJobTasksListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EdgejobsTaskContainer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch the list of tasks on an EdgeJob
     * **Access policy**: administrator
     * @param {Number} id EdgeJob Id
     * @param {module:api/EdgeJobsApi~edgeJobTasksListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EdgejobsTaskContainer>}
     */
    this.edgeJobTasksList = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling edgeJobTasksList");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [EdgejobsTaskContainer];

      return this.apiClient.callApi(
        '/edge_jobs/{id}/tasks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeJobUpdate operation.
     * @callback module:api/EdgeJobsApi~edgeJobUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortainerEdgeJob} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an EdgeJob
     * **Access policy**: administrator
     * @param {Number} id EdgeJob Id
     * @param {module:model/EdgejobsEdgeJobUpdatePayload} body EdgeGroup data
     * @param {module:api/EdgeJobsApi~edgeJobUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortainerEdgeJob}
     */
    this.edgeJobUpdate = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling edgeJobUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling edgeJobUpdate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PortainerEdgeJob;

      return this.apiClient.callApi(
        '/edge_jobs/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
