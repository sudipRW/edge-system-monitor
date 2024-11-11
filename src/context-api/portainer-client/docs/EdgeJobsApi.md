# PortainerCeApi.EdgeJobsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeJobCreate**](EdgeJobsApi.md#edgeJobCreate) | **POST** /edge_jobs | Create an EdgeJob
[**edgeJobCreateFile**](EdgeJobsApi.md#edgeJobCreateFile) | **POST** /edge_jobs/create/file | Create an EdgeJob from a file
[**edgeJobCreateString**](EdgeJobsApi.md#edgeJobCreateString) | **POST** /edge_jobs/create/string | Create an EdgeJob from a text
[**edgeJobDelete**](EdgeJobsApi.md#edgeJobDelete) | **DELETE** /edge_jobs/{id} | Delete an EdgeJob
[**edgeJobFile**](EdgeJobsApi.md#edgeJobFile) | **GET** /edge_jobs/{id}/file | Fetch a file of an EdgeJob
[**edgeJobInspect**](EdgeJobsApi.md#edgeJobInspect) | **GET** /edge_jobs/{id} | Inspect an EdgeJob
[**edgeJobList**](EdgeJobsApi.md#edgeJobList) | **GET** /edge_jobs | Fetch EdgeJobs list
[**edgeJobTaskLogsInspect**](EdgeJobsApi.md#edgeJobTaskLogsInspect) | **GET** /edge_jobs/{id}/tasks/{taskID}/logs | Fetch the log for a specifc task on an EdgeJob
[**edgeJobTasksClear**](EdgeJobsApi.md#edgeJobTasksClear) | **DELETE** /edge_jobs/{id}/tasks/{taskID}/logs | Clear the log for a specifc task on an EdgeJob
[**edgeJobTasksCollect**](EdgeJobsApi.md#edgeJobTasksCollect) | **POST** /edge_jobs/{id}/tasks/{taskID}/logs | Collect the log for a specifc task on an EdgeJob
[**edgeJobTasksList**](EdgeJobsApi.md#edgeJobTasksList) | **GET** /edge_jobs/{id}/tasks | Fetch the list of tasks on an EdgeJob
[**edgeJobUpdate**](EdgeJobsApi.md#edgeJobUpdate) | **POST** /edge_jobs/{id} | Update an EdgeJob


<a name="edgeJobCreate"></a>
# **edgeJobCreate**
> PortainerEdgeGroup edgeJobCreate(method, body)

Create an EdgeJob

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var method = "method_example"; // String | Creation Method

var body = null; // Object | for body documentation see the relevant /edge_jobs/create/{method} endpoint


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeJobCreate(method, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **method** | **String**| Creation Method | 
 **body** | **Object**| for body documentation see the relevant /edge_jobs/create/{method} endpoint | 

### Return type

[**PortainerEdgeGroup**](PortainerEdgeGroup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeJobCreateFile"></a>
# **edgeJobCreateFile**
> PortainerEdgeGroup edgeJobCreateFile(file, name, cronExpression, edgeGroups, endpoints, opts)

Create an EdgeJob from a file

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var file = "/path/to/file.txt"; // File | Content of the Stack file

var name = "name_example"; // String | Name of the stack

var cronExpression = "cronExpression_example"; // String | A cron expression to schedule this job

var edgeGroups = "edgeGroups_example"; // String | JSON stringified array of Edge Groups ids

var endpoints = "endpoints_example"; // String | JSON stringified array of Environment ids

var opts = { 
  'recurring': true // Boolean | If recurring
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeJobCreateFile(file, name, cronExpression, edgeGroups, endpoints, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| Content of the Stack file | 
 **name** | **String**| Name of the stack | 
 **cronExpression** | **String**| A cron expression to schedule this job | 
 **edgeGroups** | **String**| JSON stringified array of Edge Groups ids | 
 **endpoints** | **String**| JSON stringified array of Environment ids | 
 **recurring** | **Boolean**| If recurring | [optional] 

### Return type

[**PortainerEdgeGroup**](PortainerEdgeGroup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="edgeJobCreateString"></a>
# **edgeJobCreateString**
> PortainerEdgeGroup edgeJobCreateString(body)

Create an EdgeJob from a text

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var body = new PortainerCeApi.EdgejobsEdgeJobCreateFromFileContentPayload(); // EdgejobsEdgeJobCreateFromFileContentPayload | EdgeGroup data when method is string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeJobCreateString(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EdgejobsEdgeJobCreateFromFileContentPayload**](EdgejobsEdgeJobCreateFromFileContentPayload.md)| EdgeGroup data when method is string | 

### Return type

[**PortainerEdgeGroup**](PortainerEdgeGroup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeJobDelete"></a>
# **edgeJobDelete**
> edgeJobDelete(id)

Delete an EdgeJob

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var id = 56; // Number | EdgeJob Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.edgeJobDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeJob Id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="edgeJobFile"></a>
# **edgeJobFile**
> EdgejobsEdgeJobFileResponse edgeJobFile(id)

Fetch a file of an EdgeJob

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var id = 56; // Number | EdgeJob Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeJobFile(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeJob Id | 

### Return type

[**EdgejobsEdgeJobFileResponse**](EdgejobsEdgeJobFileResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeJobInspect"></a>
# **edgeJobInspect**
> PortainerEdgeJob edgeJobInspect(id)

Inspect an EdgeJob

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var id = 56; // Number | EdgeJob Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeJobInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeJob Id | 

### Return type

[**PortainerEdgeJob**](PortainerEdgeJob.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeJobList"></a>
# **edgeJobList**
> [PortainerEdgeJob] edgeJobList()

Fetch EdgeJobs list

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeJobList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PortainerEdgeJob]**](PortainerEdgeJob.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeJobTaskLogsInspect"></a>
# **edgeJobTaskLogsInspect**
> EdgejobsFileResponse edgeJobTaskLogsInspect(id, taskID)

Fetch the log for a specifc task on an EdgeJob

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var id = 56; // Number | EdgeJob Id

var taskID = 56; // Number | Task Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeJobTaskLogsInspect(id, taskID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeJob Id | 
 **taskID** | **Number**| Task Id | 

### Return type

[**EdgejobsFileResponse**](EdgejobsFileResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeJobTasksClear"></a>
# **edgeJobTasksClear**
> edgeJobTasksClear(id, taskID)

Clear the log for a specifc task on an EdgeJob

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var id = 56; // Number | EdgeJob Id

var taskID = 56; // Number | Task Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.edgeJobTasksClear(id, taskID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeJob Id | 
 **taskID** | **Number**| Task Id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeJobTasksCollect"></a>
# **edgeJobTasksCollect**
> edgeJobTasksCollect(id, taskID)

Collect the log for a specifc task on an EdgeJob

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var id = 56; // Number | EdgeJob Id

var taskID = 56; // Number | Task Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.edgeJobTasksCollect(id, taskID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeJob Id | 
 **taskID** | **Number**| Task Id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeJobTasksList"></a>
# **edgeJobTasksList**
> [EdgejobsTaskContainer] edgeJobTasksList(id)

Fetch the list of tasks on an EdgeJob

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var id = 56; // Number | EdgeJob Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeJobTasksList(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeJob Id | 

### Return type

[**[EdgejobsTaskContainer]**](EdgejobsTaskContainer.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeJobUpdate"></a>
# **edgeJobUpdate**
> PortainerEdgeJob edgeJobUpdate(id, body)

Update an EdgeJob

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

var apiInstance = new PortainerCeApi.EdgeJobsApi();

var id = 56; // Number | EdgeJob Id

var body = new PortainerCeApi.EdgejobsEdgeJobUpdatePayload(); // EdgejobsEdgeJobUpdatePayload | EdgeGroup data


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeJobUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeJob Id | 
 **body** | [**EdgejobsEdgeJobUpdatePayload**](EdgejobsEdgeJobUpdatePayload.md)| EdgeGroup data | 

### Return type

[**PortainerEdgeJob**](PortainerEdgeJob.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

