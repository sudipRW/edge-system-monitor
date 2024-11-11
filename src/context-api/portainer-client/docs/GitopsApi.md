# PortainerCeApi.GitopsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gitOperationRepoFilePreview**](GitopsApi.md#gitOperationRepoFilePreview) | **POST** /gitops/repo/file/preview | preview the content of target file in the git repository


<a name="gitOperationRepoFilePreview"></a>
# **gitOperationRepoFilePreview**
> GitopsFileResponse gitOperationRepoFilePreview(body)

preview the content of target file in the git repository

Retrieve the compose file content based on git repository configuration **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.GitopsApi();

var body = new PortainerCeApi.GitopsRepositoryFilePreviewPayload(); // GitopsRepositoryFilePreviewPayload | Template details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gitOperationRepoFilePreview(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GitopsRepositoryFilePreviewPayload**](GitopsRepositoryFilePreviewPayload.md)| Template details | 

### Return type

[**GitopsFileResponse**](GitopsFileResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

