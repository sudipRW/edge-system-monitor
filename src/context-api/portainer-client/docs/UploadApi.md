# PortainerCeApi.UploadApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uploadTLS**](UploadApi.md#uploadTLS) | **POST** /upload/tls/{certificate} | Upload TLS files


<a name="uploadTLS"></a>
# **uploadTLS**
> uploadTLS(certificate, folder, file)

Upload TLS files

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

var apiInstance = new PortainerCeApi.UploadApi();

var certificate = "certificate_example"; // String | TLS file type. Valid values are 'ca', 'cert' or 'key'.

var folder = "folder_example"; // String | Folder where the TLS file will be stored. Will be created if not existing

var file = "/path/to/file.txt"; // File | The file to upload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.uploadTLS(certificate, folder, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate** | **String**| TLS file type. Valid values are 'ca', 'cert' or 'key'. | 
 **folder** | **String**| Folder where the TLS file will be stored. Will be created if not existing | 
 **file** | **File**| The file to upload | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

