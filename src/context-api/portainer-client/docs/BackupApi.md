# PortainerCeApi.BackupApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup**](BackupApi.md#backup) | **POST** /backup | Creates an archive with a system data snapshot that could be used to restore the system.
[**restore**](BackupApi.md#restore) | **POST** /restore | Triggers a system restore using provided backup file


<a name="backup"></a>
# **backup**
> backup(opts)

Creates an archive with a system data snapshot that could be used to restore the system.

Creates an archive with a system data snapshot that could be used to restore the system. **Access policy**: admin

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

var apiInstance = new PortainerCeApi.BackupApi();

var opts = { 
  'body': new PortainerCeApi.BackupBackupPayload() // BackupBackupPayload | An object contains the password to encrypt the backup with
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.backup(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BackupBackupPayload**](BackupBackupPayload.md)| An object contains the password to encrypt the backup with | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

<a name="restore"></a>
# **restore**
> restore(restorePayload)

Triggers a system restore using provided backup file

Triggers a system restore using provided backup file **Access policy**: public

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.BackupApi();

var restorePayload = new PortainerCeApi.BackupRestorePayload(); // BackupRestorePayload | Restore request payload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.restore(restorePayload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restorePayload** | [**BackupRestorePayload**](BackupRestorePayload.md)| Restore request payload | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

