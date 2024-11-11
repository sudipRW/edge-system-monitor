# PortainerCeApi.EdgeStacksApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeStackCreate**](EdgeStacksApi.md#edgeStackCreate) | **POST** /edge_stacks | Create an EdgeStack
[**edgeStackCreateFile**](EdgeStacksApi.md#edgeStackCreateFile) | **POST** /edge_stacks/create/file | Create an EdgeStack from file
[**edgeStackCreateRepository**](EdgeStacksApi.md#edgeStackCreateRepository) | **POST** /edge_stacks/create/repository | Create an EdgeStack from a git repository
[**edgeStackCreateString**](EdgeStacksApi.md#edgeStackCreateString) | **POST** /edge_stacks/create/string | Create an EdgeStack from a text
[**edgeStackDelete**](EdgeStacksApi.md#edgeStackDelete) | **DELETE** /edge_stacks/{id} | Delete an EdgeStack
[**edgeStackFile**](EdgeStacksApi.md#edgeStackFile) | **GET** /edge_stacks/{id}/file | Fetches the stack file for an EdgeStack
[**edgeStackInspect**](EdgeStacksApi.md#edgeStackInspect) | **GET** /edge_stacks/{id} | Inspect an EdgeStack
[**edgeStackList**](EdgeStacksApi.md#edgeStackList) | **GET** /edge_stacks | Fetches the list of EdgeStacks
[**edgeStackStatusDelete**](EdgeStacksApi.md#edgeStackStatusDelete) | **DELETE** /edge_stacks/{id}/status/{environmentId} | Delete an EdgeStack status
[**edgeStackStatusUpdate**](EdgeStacksApi.md#edgeStackStatusUpdate) | **PUT** /edge_stacks/{id}/status | Update an EdgeStack status
[**edgeStackUpdate**](EdgeStacksApi.md#edgeStackUpdate) | **PUT** /edge_stacks/{id} | Update an EdgeStack
[**endpointsIdEdgeStacksStackIdGet**](EdgeStacksApi.md#endpointsIdEdgeStacksStackIdGet) | **GET** /endpoints/{id}/edge/stacks/{stackId} | Inspect an Edge Stack for an Environment(Endpoint)


<a name="edgeStackCreate"></a>
# **edgeStackCreate**
> PortainerEdgeStack edgeStackCreate(method, body)

Create an EdgeStack

**Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EdgeStacksApi();

var method = "method_example"; // String | Creation Method

var body = null; // Object | for body documentation see the relevant /edge_stacks/create/{method} endpoint


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeStackCreate(method, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **method** | **String**| Creation Method | 
 **body** | **Object**| for body documentation see the relevant /edge_stacks/create/{method} endpoint | 

### Return type

[**PortainerEdgeStack**](PortainerEdgeStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeStackCreateFile"></a>
# **edgeStackCreateFile**
> PortainerEdgeStack edgeStackCreateFile(name, file, edgeGroups, deploymentType, opts)

Create an EdgeStack from file

**Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EdgeStacksApi();

var name = "name_example"; // String | Name of the stack

var file = "/path/to/file.txt"; // File | Content of the Stack file

var edgeGroups = "edgeGroups_example"; // String | JSON stringified array of Edge Groups ids

var deploymentType = 56; // Number | deploy type 0 - 'compose', 1 - 'kubernetes', 2 - 'nomad'

var opts = { 
  'registries': "registries_example", // String | JSON stringified array of Registry ids to use for this stack
  'useManifestNamespaces': true, // Boolean | Uses the manifest's namespaces instead of the default one, relevant only for kube environments
  'prePullImage': true, // Boolean | Pre Pull image
  'retryDeploy': true, // Boolean | Retry deploy
  'dryrun': "dryrun_example" // String | if true, will not create an edge stack, but just will check the settings and return a non-persisted edge stack object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeStackCreateFile(name, file, edgeGroups, deploymentType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the stack | 
 **file** | **File**| Content of the Stack file | 
 **edgeGroups** | **String**| JSON stringified array of Edge Groups ids | 
 **deploymentType** | **Number**| deploy type 0 - 'compose', 1 - 'kubernetes', 2 - 'nomad' | 
 **registries** | **String**| JSON stringified array of Registry ids to use for this stack | [optional] 
 **useManifestNamespaces** | **Boolean**| Uses the manifest's namespaces instead of the default one, relevant only for kube environments | [optional] 
 **prePullImage** | **Boolean**| Pre Pull image | [optional] 
 **retryDeploy** | **Boolean**| Retry deploy | [optional] 
 **dryrun** | **String**| if true, will not create an edge stack, but just will check the settings and return a non-persisted edge stack object | [optional] 

### Return type

[**PortainerEdgeStack**](PortainerEdgeStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="edgeStackCreateRepository"></a>
# **edgeStackCreateRepository**
> PortainerEdgeStack edgeStackCreateRepository(body, opts)

Create an EdgeStack from a git repository

**Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EdgeStacksApi();

var body = new PortainerCeApi.EdgestacksEdgeStackFromGitRepositoryPayload(); // EdgestacksEdgeStackFromGitRepositoryPayload | stack config

var opts = { 
  'dryrun': "dryrun_example" // String | if true, will not create an edge stack, but just will check the settings and return a non-persisted edge stack object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeStackCreateRepository(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EdgestacksEdgeStackFromGitRepositoryPayload**](EdgestacksEdgeStackFromGitRepositoryPayload.md)| stack config | 
 **dryrun** | **String**| if true, will not create an edge stack, but just will check the settings and return a non-persisted edge stack object | [optional] 

### Return type

[**PortainerEdgeStack**](PortainerEdgeStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeStackCreateString"></a>
# **edgeStackCreateString**
> PortainerEdgeStack edgeStackCreateString(body, opts)

Create an EdgeStack from a text

**Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EdgeStacksApi();

var body = new PortainerCeApi.EdgestacksEdgeStackFromStringPayload(); // EdgestacksEdgeStackFromStringPayload | stack config

var opts = { 
  'dryrun': "dryrun_example" // String | if true, will not create an edge stack, but just will check the settings and return a non-persisted edge stack object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeStackCreateString(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EdgestacksEdgeStackFromStringPayload**](EdgestacksEdgeStackFromStringPayload.md)| stack config | 
 **dryrun** | **String**| if true, will not create an edge stack, but just will check the settings and return a non-persisted edge stack object | [optional] 

### Return type

[**PortainerEdgeStack**](PortainerEdgeStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeStackDelete"></a>
# **edgeStackDelete**
> edgeStackDelete(id)

Delete an EdgeStack

**Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EdgeStacksApi();

var id = 56; // Number | EdgeStack Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.edgeStackDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeStack Id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="edgeStackFile"></a>
# **edgeStackFile**
> EdgestacksStackFileResponse edgeStackFile(id)

Fetches the stack file for an EdgeStack

**Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EdgeStacksApi();

var id = 56; // Number | EdgeStack Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeStackFile(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeStack Id | 

### Return type

[**EdgestacksStackFileResponse**](EdgestacksStackFileResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeStackInspect"></a>
# **edgeStackInspect**
> PortainerEdgeStack edgeStackInspect(id)

Inspect an EdgeStack

**Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EdgeStacksApi();

var id = 56; // Number | EdgeStack Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeStackInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeStack Id | 

### Return type

[**PortainerEdgeStack**](PortainerEdgeStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeStackList"></a>
# **edgeStackList**
> [PortainerEdgeStack] edgeStackList()

Fetches the list of EdgeStacks

**Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EdgeStacksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeStackList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PortainerEdgeStack]**](PortainerEdgeStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeStackStatusDelete"></a>
# **edgeStackStatusDelete**
> PortainerEdgeStack edgeStackStatusDelete(id, environmentId)

Delete an EdgeStack status

Authorized only if the request is done by an Edge Environment(Endpoint)

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.EdgeStacksApi();

var id = 56; // Number | EdgeStack Id

var environmentId = 56; // Number | Environment identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeStackStatusDelete(id, environmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeStack Id | 
 **environmentId** | **Number**| Environment identifier | 

### Return type

[**PortainerEdgeStack**](PortainerEdgeStack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeStackStatusUpdate"></a>
# **edgeStackStatusUpdate**
> PortainerEdgeStack edgeStackStatusUpdate(id, body)

Update an EdgeStack status

Authorized only if the request is done by an Edge Environment(Endpoint)

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.EdgeStacksApi();

var id = 56; // Number | EdgeStack Id

var body = new PortainerCeApi.EdgestacksUpdateStatusPayload(); // EdgestacksUpdateStatusPayload | EdgeStack status payload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeStackStatusUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeStack Id | 
 **body** | [**EdgestacksUpdateStatusPayload**](EdgestacksUpdateStatusPayload.md)| EdgeStack status payload | 

### Return type

[**PortainerEdgeStack**](PortainerEdgeStack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="edgeStackUpdate"></a>
# **edgeStackUpdate**
> PortainerEdgeStack edgeStackUpdate(id, body)

Update an EdgeStack

**Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EdgeStacksApi();

var id = 56; // Number | EdgeStack Id

var body = new PortainerCeApi.EdgestacksUpdateEdgeStackPayload(); // EdgestacksUpdateEdgeStackPayload | EdgeStack data


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeStackUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeStack Id | 
 **body** | [**EdgestacksUpdateEdgeStackPayload**](EdgestacksUpdateEdgeStackPayload.md)| EdgeStack data | 

### Return type

[**PortainerEdgeStack**](PortainerEdgeStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

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

var apiInstance = new PortainerCeApi.EdgeStacksApi();

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

