# PortainerCeApi.EndpointGroupsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpointGroupAddEndpoint**](EndpointGroupsApi.md#endpointGroupAddEndpoint) | **PUT** /endpoint_groups/{id}/endpoints/{endpointId} | Add an environment(endpoint) to an environment(endpoint) group
[**endpointGroupDelete**](EndpointGroupsApi.md#endpointGroupDelete) | **DELETE** /endpoint_groups/{id} | Remove an environment(endpoint) group
[**endpointGroupDeleteEndpoint**](EndpointGroupsApi.md#endpointGroupDeleteEndpoint) | **DELETE** /endpoint_groups/{id}/endpoints/{endpointId} | Removes environment(endpoint) from an environment(endpoint) group
[**endpointGroupList**](EndpointGroupsApi.md#endpointGroupList) | **GET** /endpoint_groups | List Environment(Endpoint) groups
[**endpointGroupUpdate**](EndpointGroupsApi.md#endpointGroupUpdate) | **PUT** /endpoint_groups/{id} | Update an environment(endpoint) group
[**endpointGroupsIdGet**](EndpointGroupsApi.md#endpointGroupsIdGet) | **GET** /endpoint_groups/{id} | Inspect an Environment(Endpoint) group
[**endpointGroupsPost**](EndpointGroupsApi.md#endpointGroupsPost) | **POST** /endpoint_groups | Create an Environment(Endpoint) Group


<a name="endpointGroupAddEndpoint"></a>
# **endpointGroupAddEndpoint**
> endpointGroupAddEndpoint(id, endpointId)

Add an environment(endpoint) to an environment(endpoint) group

Add an environment(endpoint) to an environment(endpoint) group **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EndpointGroupsApi();

var id = 56; // Number | EndpointGroup identifier

var endpointId = 56; // Number | Environment(Endpoint) identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointGroupAddEndpoint(id, endpointId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EndpointGroup identifier | 
 **endpointId** | **Number**| Environment(Endpoint) identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="endpointGroupDelete"></a>
# **endpointGroupDelete**
> endpointGroupDelete(id)

Remove an environment(endpoint) group

Remove an environment(endpoint) group. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EndpointGroupsApi();

var id = 56; // Number | EndpointGroup identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointGroupDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EndpointGroup identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="endpointGroupDeleteEndpoint"></a>
# **endpointGroupDeleteEndpoint**
> endpointGroupDeleteEndpoint(id, endpointId)

Removes environment(endpoint) from an environment(endpoint) group

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

var apiInstance = new PortainerCeApi.EndpointGroupsApi();

var id = 56; // Number | EndpointGroup identifier

var endpointId = 56; // Number | Environment(Endpoint) identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointGroupDeleteEndpoint(id, endpointId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EndpointGroup identifier | 
 **endpointId** | **Number**| Environment(Endpoint) identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="endpointGroupList"></a>
# **endpointGroupList**
> [PortainerEndpointGroup] endpointGroupList()

List Environment(Endpoint) groups

List all environment(endpoint) groups based on the current user authorizations. Will return all environment(endpoint) groups if using an administrator account otherwise it will only return authorized environment(endpoint) groups. **Access policy**: restricted

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

var apiInstance = new PortainerCeApi.EndpointGroupsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointGroupList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PortainerEndpointGroup]**](PortainerEndpointGroup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointGroupUpdate"></a>
# **endpointGroupUpdate**
> PortainerEndpointGroup endpointGroupUpdate(id, body)

Update an environment(endpoint) group

Update an environment(endpoint) group. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EndpointGroupsApi();

var id = 56; // Number | EndpointGroup identifier

var body = new PortainerCeApi.EndpointgroupsEndpointGroupUpdatePayload(); // EndpointgroupsEndpointGroupUpdatePayload | EndpointGroup details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointGroupUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EndpointGroup identifier | 
 **body** | [**EndpointgroupsEndpointGroupUpdatePayload**](EndpointgroupsEndpointGroupUpdatePayload.md)| EndpointGroup details | 

### Return type

[**PortainerEndpointGroup**](PortainerEndpointGroup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointGroupsIdGet"></a>
# **endpointGroupsIdGet**
> PortainerEndpointGroup endpointGroupsIdGet(id)

Inspect an Environment(Endpoint) group

Retrieve details abont an environment(endpoint) group. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EndpointGroupsApi();

var id = 56; // Number | Environment(Endpoint) group identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointGroupsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) group identifier | 

### Return type

[**PortainerEndpointGroup**](PortainerEndpointGroup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointGroupsPost"></a>
# **endpointGroupsPost**
> PortainerEndpointGroup endpointGroupsPost(body)

Create an Environment(Endpoint) Group

Create a new environment(endpoint) group. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.EndpointGroupsApi();

var body = new PortainerCeApi.EndpointgroupsEndpointGroupCreatePayload(); // EndpointgroupsEndpointGroupCreatePayload | Environment(Endpoint) Group details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointGroupsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EndpointgroupsEndpointGroupCreatePayload**](EndpointgroupsEndpointGroupCreatePayload.md)| Environment(Endpoint) Group details | 

### Return type

[**PortainerEndpointGroup**](PortainerEndpointGroup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

