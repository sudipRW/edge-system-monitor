# PortainerCeApi.ResourceControlsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resourceControlCreate**](ResourceControlsApi.md#resourceControlCreate) | **POST** /resource_controls | Create a new resource control
[**resourceControlDelete**](ResourceControlsApi.md#resourceControlDelete) | **DELETE** /resource_controls/{id} | Remove a resource control
[**resourceControlUpdate**](ResourceControlsApi.md#resourceControlUpdate) | **PUT** /resource_controls/{id} | Update a resource control


<a name="resourceControlCreate"></a>
# **resourceControlCreate**
> PortainerResourceControl resourceControlCreate(body)

Create a new resource control

Create a new resource control to restrict access to a Docker resource. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.ResourceControlsApi();

var body = new PortainerCeApi.ResourcecontrolsResourceControlCreatePayload(); // ResourcecontrolsResourceControlCreatePayload | Resource control details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resourceControlCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ResourcecontrolsResourceControlCreatePayload**](ResourcecontrolsResourceControlCreatePayload.md)| Resource control details | 

### Return type

[**PortainerResourceControl**](PortainerResourceControl.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resourceControlDelete"></a>
# **resourceControlDelete**
> resourceControlDelete(id)

Remove a resource control

Remove a resource control. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.ResourceControlsApi();

var id = 56; // Number | Resource control identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.resourceControlDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Resource control identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="resourceControlUpdate"></a>
# **resourceControlUpdate**
> PortainerResourceControl resourceControlUpdate(id, body)

Update a resource control

Update a resource control **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.ResourceControlsApi();

var id = 56; // Number | Resource control identifier

var body = new PortainerCeApi.ResourcecontrolsResourceControlUpdatePayload(); // ResourcecontrolsResourceControlUpdatePayload | Resource control details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resourceControlUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Resource control identifier | 
 **body** | [**ResourcecontrolsResourceControlUpdatePayload**](ResourcecontrolsResourceControlUpdatePayload.md)| Resource control details | 

### Return type

[**PortainerResourceControl**](PortainerResourceControl.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

