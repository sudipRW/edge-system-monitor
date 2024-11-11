# PortainerCeApi.EdgeGroupsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeGroupCreate**](EdgeGroupsApi.md#edgeGroupCreate) | **POST** /edge_groups | Create an EdgeGroup
[**edgeGroupDelete**](EdgeGroupsApi.md#edgeGroupDelete) | **DELETE** /edge_groups/{id} | Deletes an EdgeGroup
[**edgeGroupInspect**](EdgeGroupsApi.md#edgeGroupInspect) | **GET** /edge_groups/{id} | Inspects an EdgeGroup
[**edgeGroupList**](EdgeGroupsApi.md#edgeGroupList) | **GET** /edge_groups | list EdgeGroups
[**egeGroupUpdate**](EdgeGroupsApi.md#egeGroupUpdate) | **PUT** /edge_groups/{id} | Updates an EdgeGroup


<a name="edgeGroupCreate"></a>
# **edgeGroupCreate**
> PortainerEdgeGroup edgeGroupCreate(body)

Create an EdgeGroup

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

var apiInstance = new PortainerCeApi.EdgeGroupsApi();

var body = new PortainerCeApi.EdgegroupsEdgeGroupCreatePayload(); // EdgegroupsEdgeGroupCreatePayload | EdgeGroup data


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeGroupCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EdgegroupsEdgeGroupCreatePayload**](EdgegroupsEdgeGroupCreatePayload.md)| EdgeGroup data | 

### Return type

[**PortainerEdgeGroup**](PortainerEdgeGroup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="edgeGroupDelete"></a>
# **edgeGroupDelete**
> edgeGroupDelete(id)

Deletes an EdgeGroup

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

var apiInstance = new PortainerCeApi.EdgeGroupsApi();

var id = 56; // Number | EdgeGroup Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.edgeGroupDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeGroup Id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="edgeGroupInspect"></a>
# **edgeGroupInspect**
> PortainerEdgeGroup edgeGroupInspect(id)

Inspects an EdgeGroup

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

var apiInstance = new PortainerCeApi.EdgeGroupsApi();

var id = 56; // Number | EdgeGroup Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeGroupInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeGroup Id | 

### Return type

[**PortainerEdgeGroup**](PortainerEdgeGroup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="edgeGroupList"></a>
# **edgeGroupList**
> [EdgegroupsDecoratedEdgeGroup] edgeGroupList()

list EdgeGroups

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

var apiInstance = new PortainerCeApi.EdgeGroupsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeGroupList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[EdgegroupsDecoratedEdgeGroup]**](EdgegroupsDecoratedEdgeGroup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="egeGroupUpdate"></a>
# **egeGroupUpdate**
> PortainerEdgeGroup egeGroupUpdate(id, body)

Updates an EdgeGroup

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

var apiInstance = new PortainerCeApi.EdgeGroupsApi();

var id = 56; // Number | EdgeGroup Id

var body = new PortainerCeApi.EdgegroupsEdgeGroupUpdatePayload(); // EdgegroupsEdgeGroupUpdatePayload | EdgeGroup data


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egeGroupUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EdgeGroup Id | 
 **body** | [**EdgegroupsEdgeGroupUpdatePayload**](EdgegroupsEdgeGroupUpdatePayload.md)| EdgeGroup data | 

### Return type

[**PortainerEdgeGroup**](PortainerEdgeGroup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

