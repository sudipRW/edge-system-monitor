# PortainerCeApi.WebsocketApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**websocketAttachGet**](WebsocketApi.md#websocketAttachGet) | **GET** /websocket/attach | Attach a websocket
[**websocketExecGet**](WebsocketApi.md#websocketExecGet) | **GET** /websocket/exec | Execute a websocket
[**websocketKubernetesShellGet**](WebsocketApi.md#websocketKubernetesShellGet) | **GET** /websocket/kubernetes-shell | Execute a websocket on kubectl shell pod
[**websocketPodGet**](WebsocketApi.md#websocketPodGet) | **GET** /websocket/pod | Execute a websocket on pod


<a name="websocketAttachGet"></a>
# **websocketAttachGet**
> websocketAttachGet(endpointId, token, opts)

Attach a websocket

If the nodeName query parameter is present, the request will be proxied to the underlying agent environment(endpoint). If the nodeName query parameter is not specified, the request will be upgraded to the websocket protocol and an AttachStart operation HTTP request will be created and hijacked. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.WebsocketApi();

var endpointId = 56; // Number | environment(endpoint) ID of the environment(endpoint) where the resource is located

var token = "token_example"; // String | JWT token used for authentication against this environment(endpoint)

var opts = { 
  'nodeName': "nodeName_example" // String | node name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.websocketAttachGet(endpointId, token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **Number**| environment(endpoint) ID of the environment(endpoint) where the resource is located | 
 **token** | **String**| JWT token used for authentication against this environment(endpoint) | 
 **nodeName** | **String**| node name | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="websocketExecGet"></a>
# **websocketExecGet**
> websocketExecGet(endpointId, token, opts)

Execute a websocket

If the nodeName query parameter is present, the request will be proxied to the underlying agent environment(endpoint). If the nodeName query parameter is not specified, the request will be upgraded to the websocket protocol and an ExecStart operation HTTP request will be created and hijacked.

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

var apiInstance = new PortainerCeApi.WebsocketApi();

var endpointId = 56; // Number | environment(endpoint) ID of the environment(endpoint) where the resource is located

var token = "token_example"; // String | JWT token used for authentication against this environment(endpoint)

var opts = { 
  'nodeName': "nodeName_example" // String | node name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.websocketExecGet(endpointId, token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **Number**| environment(endpoint) ID of the environment(endpoint) where the resource is located | 
 **token** | **String**| JWT token used for authentication against this environment(endpoint) | 
 **nodeName** | **String**| node name | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="websocketKubernetesShellGet"></a>
# **websocketKubernetesShellGet**
> websocketKubernetesShellGet(endpointId, token)

Execute a websocket on kubectl shell pod

The request will be upgraded to the websocket protocol. The request will proxy input from the client to the pod via long-lived websocket connection. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.WebsocketApi();

var endpointId = 56; // Number | environment(endpoint) ID of the environment(endpoint) where the resource is located

var token = "token_example"; // String | JWT token used for authentication against this environment(endpoint)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.websocketKubernetesShellGet(endpointId, token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **Number**| environment(endpoint) ID of the environment(endpoint) where the resource is located | 
 **token** | **String**| JWT token used for authentication against this environment(endpoint) | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="websocketPodGet"></a>
# **websocketPodGet**
> websocketPodGet(endpointId, namespace, podName, containerName, command, token)

Execute a websocket on pod

The request will be upgraded to the websocket protocol. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.WebsocketApi();

var endpointId = 56; // Number | environment(endpoint) ID of the environment(endpoint) where the resource is located

var namespace = "namespace_example"; // String | namespace where the container is located

var podName = "podName_example"; // String | name of the pod containing the container

var containerName = "containerName_example"; // String | name of the container

var command = "command_example"; // String | command to execute in the container

var token = "token_example"; // String | JWT token used for authentication against this environment(endpoint)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.websocketPodGet(endpointId, namespace, podName, containerName, command, token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **Number**| environment(endpoint) ID of the environment(endpoint) where the resource is located | 
 **namespace** | **String**| namespace where the container is located | 
 **podName** | **String**| name of the pod containing the container | 
 **containerName** | **String**| name of the container | 
 **command** | **String**| command to execute in the container | 
 **token** | **String**| JWT token used for authentication against this environment(endpoint) | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

