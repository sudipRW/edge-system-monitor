# PortainerCeApi.DockerApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dockerContainerGpusInspect**](DockerApi.md#dockerContainerGpusInspect) | **GET** /docker/{environmentId}/containers/{containerId}/gpus | Fetch container gpus data
[**dockerImagesList**](DockerApi.md#dockerImagesList) | **GET** /docker/{environmentId}/images | Fetch images


<a name="dockerContainerGpusInspect"></a>
# **dockerContainerGpusInspect**
> ContainersContainerGpusResponse dockerContainerGpusInspect(environmentId, containerId)

Fetch container gpus data

**Access policy**:

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.DockerApi();

var environmentId = 56; // Number | Environment identifier

var containerId = 56; // Number | Container identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dockerContainerGpusInspect(environmentId, containerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | **Number**| Environment identifier | 
 **containerId** | **Number**| Container identifier | 

### Return type

[**ContainersContainerGpusResponse**](ContainersContainerGpusResponse.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dockerImagesList"></a>
# **dockerImagesList**
> [ImagesImageResponse] dockerImagesList(environmentId, opts)

Fetch images

**Access policy**:

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.DockerApi();

var environmentId = 56; // Number | Environment identifier

var opts = { 
  'withUsage': true // Boolean | Include image usage information
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dockerImagesList(environmentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | **Number**| Environment identifier | 
 **withUsage** | **Boolean**| Include image usage information | [optional] 

### Return type

[**[ImagesImageResponse]**](ImagesImageResponse.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

