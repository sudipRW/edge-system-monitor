# PortainerCeApi.EndpointsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpointAssociationDelete**](EndpointsApi.md#endpointAssociationDelete) | **PUT** /endpoints/{id}/association | De-association an edge environment(endpoint)
[**endpointCreate**](EndpointsApi.md#endpointCreate) | **POST** /endpoints | Create a new environment(endpoint)
[**endpointCreateGlobalKey**](EndpointsApi.md#endpointCreateGlobalKey) | **POST** /endpoints/global-key | Create or retrieve the endpoint for an EdgeID
[**endpointDelete**](EndpointsApi.md#endpointDelete) | **DELETE** /endpoints/{id} | Remove an environment
[**endpointDeleteBatch**](EndpointsApi.md#endpointDeleteBatch) | **DELETE** /endpoints | Remove multiple environments
[**endpointDockerhubStatus**](EndpointsApi.md#endpointDockerhubStatus) | **GET** /endpoints/{id}/dockerhub/{registryId} | fetch docker pull limits
[**endpointEdgeStatusInspect**](EndpointsApi.md#endpointEdgeStatusInspect) | **GET** /endpoints/{id}/edge/status | Get environment(endpoint) status
[**endpointForceUpdateService**](EndpointsApi.md#endpointForceUpdateService) | **PUT** /endpoints/{id}/forceupdateservice | force update a docker service
[**endpointInspect**](EndpointsApi.md#endpointInspect) | **GET** /endpoints/{id} | Inspect an environment(endpoint)
[**endpointList**](EndpointsApi.md#endpointList) | **GET** /endpoints | List environments(endpoints)
[**endpointRegistriesList**](EndpointsApi.md#endpointRegistriesList) | **GET** /endpoints/{id}/registries | List Registries on environment
[**endpointRegistryAccess**](EndpointsApi.md#endpointRegistryAccess) | **PUT** /endpoints/{id}/registries/{registryId} | update registry access for environment
[**endpointSettingsUpdate**](EndpointsApi.md#endpointSettingsUpdate) | **PUT** /endpoints/{id}/settings | Update settings for an environment(endpoint)
[**endpointSnapshot**](EndpointsApi.md#endpointSnapshot) | **POST** /endpoints/{id}/snapshot | Snapshots an environment(endpoint)
[**endpointSnapshots**](EndpointsApi.md#endpointSnapshots) | **POST** /endpoints/snapshot | Snapshot all environments(endpoints)
[**endpointUpdate**](EndpointsApi.md#endpointUpdate) | **PUT** /endpoints/{id} | Update an environment(endpoint)
[**endpointUpdateRelations**](EndpointsApi.md#endpointUpdateRelations) | **PUT** /endpoints/relations | Update relations for a list of environments
[**endpointsIdDockerV2BrowsePutPost**](EndpointsApi.md#endpointsIdDockerV2BrowsePutPost) | **POST** /endpoints/{id}/docker/v2/browse/put | Upload a file under a specific path on the file system of an environment (endpoint)
[**endpointsIdEdgeJobsJobIDLogsPost**](EndpointsApi.md#endpointsIdEdgeJobsJobIDLogsPost) | **POST** /endpoints/{id}/edge/jobs/{jobID}/logs | Inspect an EdgeJob Log
[**endpointsIdEdgeStacksStackIdGet**](EndpointsApi.md#endpointsIdEdgeStacksStackIdGet) | **GET** /endpoints/{id}/edge/stacks/{stackId} | Inspect an Edge Stack for an Environment(Endpoint)


<a name="endpointAssociationDelete"></a>
# **endpointAssociationDelete**
> endpointAssociationDelete(id)

De-association an edge environment(endpoint)

De-association an edge environment(endpoint). **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | Environment(Endpoint) identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointAssociationDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointCreate"></a>
# **endpointCreate**
> PortainerEndpoint endpointCreate(name, endpointCreationType, edgeTunnelServerAddress, opts)

Create a new environment(endpoint)

Create a new environment(endpoint) that will be used to manage an environment(endpoint). **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var name = "name_example"; // String | Name that will be used to identify this environment(endpoint) (example: my-environment)

var endpointCreationType = 56; // Number | Environment(Endpoint) type. Value must be one of: 1 (Local Docker environment), 2 (Agent environment), 3 (Azure environment), 4 (Edge agent environment) or 5 (Local Kubernetes Environment)

var edgeTunnelServerAddress = "edgeTunnelServerAddress_example"; // String | URL or IP address that will be used to establish a reverse tunnel

var opts = { 
  'URL': "URL_example", // String | URL or IP address of a Docker host (example: docker.mydomain.tld:2375). Defaults to local if not specified (Linux: /var/run/docker.sock, Windows: //./pipe/docker_engine). Cannot be empty if EndpointCreationType is set to 4 (Edge agent environment)
  'publicURL': "publicURL_example", // String | URL or IP address where exposed containers will be reachable. Defaults to URL if not specified (example: docker.mydomain.tld:2375)
  'groupID': 56, // Number | Environment(Endpoint) group identifier. If not specified will default to 1 (unassigned).
  'TLS': true, // Boolean | Require TLS to connect against this environment(endpoint). Must be true if EndpointCreationType is set to 2 (Agent environment)
  'tLSSkipVerify': true, // Boolean | Skip server verification when using TLS. Must be true if EndpointCreationType is set to 2 (Agent environment)
  'tLSSkipClientVerify': true, // Boolean | Skip client verification when using TLS. Must be true if EndpointCreationType is set to 2 (Agent environment)
  'tLSCACertFile': "/path/to/file.txt", // File | TLS CA certificate file
  'tLSCertFile': "/path/to/file.txt", // File | TLS client certificate file
  'tLSKeyFile': "/path/to/file.txt", // File | TLS client key file
  'azureApplicationID': "azureApplicationID_example", // String | Azure application ID. Required if environment(endpoint) type is set to 3
  'azureTenantID': "azureTenantID_example", // String | Azure tenant ID. Required if environment(endpoint) type is set to 3
  'azureAuthenticationKey': "azureAuthenticationKey_example", // String | Azure authentication key. Required if environment(endpoint) type is set to 3
  'tagIds': [3.4], // [Number] | List of tag identifiers to which this environment(endpoint) is associated
  'edgeCheckinInterval': 56, // Number | The check in interval for edge agent (in seconds)
  'gpus': "gpus_example" // String | List of GPUs - json stringified array of {name, value} structs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointCreate(name, endpointCreationType, edgeTunnelServerAddress, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name that will be used to identify this environment(endpoint) (example: my-environment) | 
 **endpointCreationType** | **Number**| Environment(Endpoint) type. Value must be one of: 1 (Local Docker environment), 2 (Agent environment), 3 (Azure environment), 4 (Edge agent environment) or 5 (Local Kubernetes Environment) | 
 **edgeTunnelServerAddress** | **String**| URL or IP address that will be used to establish a reverse tunnel | 
 **URL** | **String**| URL or IP address of a Docker host (example: docker.mydomain.tld:2375). Defaults to local if not specified (Linux: /var/run/docker.sock, Windows: //./pipe/docker_engine). Cannot be empty if EndpointCreationType is set to 4 (Edge agent environment) | [optional] 
 **publicURL** | **String**| URL or IP address where exposed containers will be reachable. Defaults to URL if not specified (example: docker.mydomain.tld:2375) | [optional] 
 **groupID** | **Number**| Environment(Endpoint) group identifier. If not specified will default to 1 (unassigned). | [optional] 
 **TLS** | **Boolean**| Require TLS to connect against this environment(endpoint). Must be true if EndpointCreationType is set to 2 (Agent environment) | [optional] 
 **tLSSkipVerify** | **Boolean**| Skip server verification when using TLS. Must be true if EndpointCreationType is set to 2 (Agent environment) | [optional] 
 **tLSSkipClientVerify** | **Boolean**| Skip client verification when using TLS. Must be true if EndpointCreationType is set to 2 (Agent environment) | [optional] 
 **tLSCACertFile** | **File**| TLS CA certificate file | [optional] 
 **tLSCertFile** | **File**| TLS client certificate file | [optional] 
 **tLSKeyFile** | **File**| TLS client key file | [optional] 
 **azureApplicationID** | **String**| Azure application ID. Required if environment(endpoint) type is set to 3 | [optional] 
 **azureTenantID** | **String**| Azure tenant ID. Required if environment(endpoint) type is set to 3 | [optional] 
 **azureAuthenticationKey** | **String**| Azure authentication key. Required if environment(endpoint) type is set to 3 | [optional] 
 **tagIds** | [**[Number]**](Number.md)| List of tag identifiers to which this environment(endpoint) is associated | [optional] 
 **edgeCheckinInterval** | **Number**| The check in interval for edge agent (in seconds) | [optional] 
 **gpus** | **String**| List of GPUs - json stringified array of {name, value} structs | [optional] 

### Return type

[**PortainerEndpoint**](PortainerEndpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="endpointCreateGlobalKey"></a>
# **endpointCreateGlobalKey**
> EndpointsEndpointCreateGlobalKeyResponse endpointCreateGlobalKey()

Create or retrieve the endpoint for an EdgeID

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.EndpointsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointCreateGlobalKey(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EndpointsEndpointCreateGlobalKeyResponse**](EndpointsEndpointCreateGlobalKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="endpointDelete"></a>
# **endpointDelete**
> endpointDelete(id)

Remove an environment

Remove the environment associated to the specified identifier and optionally clean-up associated resources. **Access policy**: Administrator only.

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | Environment(Endpoint) identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="endpointDeleteBatch"></a>
# **endpointDeleteBatch**
> endpointDeleteBatch(body)

Remove multiple environments

Remove multiple environments and optionally clean-up associated resources. **Access policy**: Administrator only.

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var body = new PortainerCeApi.EndpointsEndpointDeleteBatchPayload(); // EndpointsEndpointDeleteBatchPayload | List of environments to delete, with optional deleteCluster flag to clean-up assocaited resources (cloud environments only)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointDeleteBatch(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EndpointsEndpointDeleteBatchPayload**](EndpointsEndpointDeleteBatchPayload.md)| List of environments to delete, with optional deleteCluster flag to clean-up assocaited resources (cloud environments only) | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointDockerhubStatus"></a>
# **endpointDockerhubStatus**
> EndpointsDockerhubStatusResponse endpointDockerhubStatus(id, registryId)

fetch docker pull limits

get docker pull limits for a docker hub registry in the environment **Access policy**:

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | endpoint ID

var registryId = 56; // Number | registry ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointDockerhubStatus(id, registryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| endpoint ID | 
 **registryId** | **Number**| registry ID | 

### Return type

[**EndpointsDockerhubStatusResponse**](EndpointsDockerhubStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointEdgeStatusInspect"></a>
# **endpointEdgeStatusInspect**
> EndpointedgeEndpointEdgeStatusInspectResponse endpointEdgeStatusInspect(id)

Get environment(endpoint) status

environment(endpoint) for edge agent to check status of environment(endpoint) **Access policy**: restricted only to Edge environments(endpoints)

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | Environment(Endpoint) identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointEdgeStatusInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 

### Return type

[**EndpointedgeEndpointEdgeStatusInspectResponse**](EndpointedgeEndpointEdgeStatusInspectResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="endpointForceUpdateService"></a>
# **endpointForceUpdateService**
> SwarmServiceUpdateResponse endpointForceUpdateService(id, body)

force update a docker service

force update a docker service **Access policy**: authenticated

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | endpoint identifier

var body = new PortainerCeApi.EndpointsForceUpdateServicePayload(); // EndpointsForceUpdateServicePayload | details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointForceUpdateService(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| endpoint identifier | 
 **body** | [**EndpointsForceUpdateServicePayload**](EndpointsForceUpdateServicePayload.md)| details | 

### Return type

[**SwarmServiceUpdateResponse**](SwarmServiceUpdateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointInspect"></a>
# **endpointInspect**
> PortainerEndpoint endpointInspect(id)

Inspect an environment(endpoint)

Retrieve details about an environment(endpoint). **Access policy**: restricted

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | Environment(Endpoint) identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 

### Return type

[**PortainerEndpoint**](PortainerEndpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointList"></a>
# **endpointList**
> [PortainerEndpoint] endpointList(opts)

List environments(endpoints)

List all environments(endpoints) based on the current user authorizations. Will return all environments(endpoints) if using an administrator or team leader account otherwise it will only return authorized environments(endpoints). **Access policy**: restricted

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var opts = { 
  'start': 56, // Number | Start searching from
  'limit': 56, // Number | Limit results to this value
  'order': 56, // Number | Order sorted results by desc/asc
  'search': "search_example", // String | Search query
  'groupIds': [3.4], // [Number] | List environments(endpoints) of these groups
  'status': [3.4], // [Number] | List environments(endpoints) by this status
  'types': [3.4], // [Number] | List environments(endpoints) of this type
  'tagIds': [3.4], // [Number] | search environments(endpoints) with these tags (depends on tagsPartialMatch)
  'tagsPartialMatch': true, // Boolean | If true, will return environment(endpoint) which has one of tagIds, if false (or missing) will return only environments(endpoints) that has all the tags
  'endpointIds': [3.4], // [Number] | will return only these environments(endpoints)
  'provisioned': true, // Boolean | If true, will return environment(endpoint) that were provisioned
  'agentVersions': ["agentVersions_example"], // [String] | will return only environments with on of these agent versions
  'edgeAsync': true, // Boolean | if exists true show only edge async agents, false show only standard edge agents. if missing, will show both types (relevant only for edge agents)
  'edgeDeviceUntrusted': true, // Boolean | if true, show only untrusted edge agents, if false show only trusted edge agents (relevant only for edge agents)
  'edgeCheckInPassedSeconds': 8.14, // Number | if bigger then zero, show only edge agents that checked-in in the last provided seconds (relevant only for edge agents)
  'excludeSnapshots': true, // Boolean | if true, the snapshot data won't be retrieved
  'name': "name_example", // String | will return only environments(endpoints) with this name
  'edgeStackStatus': "edgeStackStatus_example" // String | only applied when edgeStackId exists. Filter the returned environments based on their deployment status in the stack (not the environment status!)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**| Start searching from | [optional] 
 **limit** | **Number**| Limit results to this value | [optional] 
 **order** | **Number**| Order sorted results by desc/asc | [optional] 
 **search** | **String**| Search query | [optional] 
 **groupIds** | [**[Number]**](Number.md)| List environments(endpoints) of these groups | [optional] 
 **status** | [**[Number]**](Number.md)| List environments(endpoints) by this status | [optional] 
 **types** | [**[Number]**](Number.md)| List environments(endpoints) of this type | [optional] 
 **tagIds** | [**[Number]**](Number.md)| search environments(endpoints) with these tags (depends on tagsPartialMatch) | [optional] 
 **tagsPartialMatch** | **Boolean**| If true, will return environment(endpoint) which has one of tagIds, if false (or missing) will return only environments(endpoints) that has all the tags | [optional] 
 **endpointIds** | [**[Number]**](Number.md)| will return only these environments(endpoints) | [optional] 
 **provisioned** | **Boolean**| If true, will return environment(endpoint) that were provisioned | [optional] 
 **agentVersions** | [**[String]**](String.md)| will return only environments with on of these agent versions | [optional] 
 **edgeAsync** | **Boolean**| if exists true show only edge async agents, false show only standard edge agents. if missing, will show both types (relevant only for edge agents) | [optional] 
 **edgeDeviceUntrusted** | **Boolean**| if true, show only untrusted edge agents, if false show only trusted edge agents (relevant only for edge agents) | [optional] 
 **edgeCheckInPassedSeconds** | **Number**| if bigger then zero, show only edge agents that checked-in in the last provided seconds (relevant only for edge agents) | [optional] 
 **excludeSnapshots** | **Boolean**| if true, the snapshot data won't be retrieved | [optional] 
 **name** | **String**| will return only environments(endpoints) with this name | [optional] 
 **edgeStackStatus** | **String**| only applied when edgeStackId exists. Filter the returned environments based on their deployment status in the stack (not the environment status!) | [optional] 

### Return type

[**[PortainerEndpoint]**](PortainerEndpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointRegistriesList"></a>
# **endpointRegistriesList**
> [PortainerRegistry] endpointRegistriesList(id, opts)

List Registries on environment

List all registries based on the current user authorizations in current environment. **Access policy**: authenticated

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | Environment(Endpoint) identifier

var opts = { 
  'namespace': "namespace_example" // String | required if kubernetes environment, will show registries by namespace
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointRegistriesList(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 
 **namespace** | **String**| required if kubernetes environment, will show registries by namespace | [optional] 

### Return type

[**[PortainerRegistry]**](PortainerRegistry.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointRegistryAccess"></a>
# **endpointRegistryAccess**
> endpointRegistryAccess(id, registryId, body)

update registry access for environment

**Access policy**: authenticated

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | Environment(Endpoint) identifier

var registryId = 56; // Number | Registry identifier

var body = new PortainerCeApi.EndpointsRegistryAccessPayload(); // EndpointsRegistryAccessPayload | details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointRegistryAccess(id, registryId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 
 **registryId** | **Number**| Registry identifier | 
 **body** | [**EndpointsRegistryAccessPayload**](EndpointsRegistryAccessPayload.md)| details | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointSettingsUpdate"></a>
# **endpointSettingsUpdate**
> PortainerEndpoint endpointSettingsUpdate(id, body)

Update settings for an environment(endpoint)

Update settings for an environment(endpoint). **Access policy**: authenticated

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | Environment(Endpoint) identifier

var body = new PortainerCeApi.EndpointsEndpointSettingsUpdatePayload(); // EndpointsEndpointSettingsUpdatePayload | Environment(Endpoint) details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointSettingsUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 
 **body** | [**EndpointsEndpointSettingsUpdatePayload**](EndpointsEndpointSettingsUpdatePayload.md)| Environment(Endpoint) details | 

### Return type

[**PortainerEndpoint**](PortainerEndpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointSnapshot"></a>
# **endpointSnapshot**
> endpointSnapshot(id)

Snapshots an environment(endpoint)

Snapshots an environment(endpoint) **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | Environment(Endpoint) identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointSnapshot(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="endpointSnapshots"></a>
# **endpointSnapshots**
> endpointSnapshots()

Snapshot all environments(endpoints)

Snapshot all environments(endpoints) **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointSnapshots(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="endpointUpdate"></a>
# **endpointUpdate**
> PortainerEndpoint endpointUpdate(id, body)

Update an environment(endpoint)

Update an environment(endpoint). **Access policy**: authenticated

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | Environment(Endpoint) identifier

var body = new PortainerCeApi.EndpointsEndpointUpdatePayload(); // EndpointsEndpointUpdatePayload | Environment(Endpoint) details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 
 **body** | [**EndpointsEndpointUpdatePayload**](EndpointsEndpointUpdatePayload.md)| Environment(Endpoint) details | 

### Return type

[**PortainerEndpoint**](PortainerEndpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointUpdateRelations"></a>
# **endpointUpdateRelations**
> endpointUpdateRelations(body)

Update relations for a list of environments

Update relations for a list of environments Edge groups, tags and environment group can be updated.  **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var body = new PortainerCeApi.EndpointsEndpointUpdateRelationsPayload(); // EndpointsEndpointUpdateRelationsPayload | Environment relations data


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointUpdateRelations(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EndpointsEndpointUpdateRelationsPayload**](EndpointsEndpointUpdateRelationsPayload.md)| Environment relations data | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="endpointsIdDockerV2BrowsePutPost"></a>
# **endpointsIdDockerV2BrowsePutPost**
> endpointsIdDockerV2BrowsePutPost(id, path, file, opts)

Upload a file under a specific path on the file system of an environment (endpoint)

Use this environment(endpoint) to upload TLS files. **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | Environment(Endpoint) identifier

var path = "path_example"; // String | The destination path to upload the file to

var file = "/path/to/file.txt"; // File | The file to upload

var opts = { 
  'volumeID': "volumeID_example" // String | Optional volume identifier to upload the file
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointsIdDockerV2BrowsePutPost(id, path, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 
 **path** | **String**| The destination path to upload the file to | 
 **file** | **File**| The file to upload | 
 **volumeID** | **String**| Optional volume identifier to upload the file | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="endpointsIdEdgeJobsJobIDLogsPost"></a>
# **endpointsIdEdgeJobsJobIDLogsPost**
> endpointsIdEdgeJobsJobIDLogsPost(id, jobID)

Inspect an EdgeJob Log

**Access policy**: public

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | environment(endpoint) Id

var jobID = 56; // Number | Job Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointsIdEdgeJobsJobIDLogsPost(id, jobID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| environment(endpoint) Id | 
 **jobID** | **Number**| Job Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointsIdEdgeStacksStackIdGet"></a>
# **endpointsIdEdgeStacksStackIdGet**
> EdgeStackPayload endpointsIdEdgeStacksStackIdGet(id, stackId)

Inspect an Edge Stack for an Environment(Endpoint)

**Access policy**: public

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.EndpointsApi();

var id = 56; // Number | environment(endpoint) Id

var stackId = 56; // Number | EdgeStack Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointsIdEdgeStacksStackIdGet(id, stackId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| environment(endpoint) Id | 
 **stackId** | **Number**| EdgeStack Id | 

### Return type

[**EdgeStackPayload**](EdgeStackPayload.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

