# PortainerCeApi.StatusApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusInspect**](StatusApi.md#statusInspect) | **GET** /status | Check Portainer status
[**statusNodesCount**](StatusApi.md#statusNodesCount) | **GET** /status/nodes | Retrieve the count of nodes
[**version**](StatusApi.md#version) | **GET** /status/version | Check for portainer updates


<a name="statusInspect"></a>
# **statusInspect**
> SystemStatus statusInspect()

Check Portainer status

Deprecated: use the `/system/status` endpoint instead. Retrieve Portainer status **Access policy**: public

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.StatusApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statusInspect(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemStatus**](SystemStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="statusNodesCount"></a>
# **statusNodesCount**
> SystemNodesCountResponse statusNodesCount()

Retrieve the count of nodes

Deprecated: use the `/system/nodes` endpoint instead. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StatusApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statusNodesCount(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemNodesCountResponse**](SystemNodesCountResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="version"></a>
# **version**
> SystemVersionResponse version()

Check for portainer updates

Deprecated: use the `/system/version` endpoint instead. Check if portainer has an update available **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StatusApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.version(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemVersionResponse**](SystemVersionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

