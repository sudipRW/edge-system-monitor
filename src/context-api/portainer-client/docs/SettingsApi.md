# PortainerCeApi.SettingsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**settingsInspect**](SettingsApi.md#settingsInspect) | **GET** /settings | Retrieve Portainer settings
[**settingsPublic**](SettingsApi.md#settingsPublic) | **GET** /settings/public | Retrieve Portainer public settings
[**settingsUpdate**](SettingsApi.md#settingsUpdate) | **PUT** /settings | Update Portainer settings


<a name="settingsInspect"></a>
# **settingsInspect**
> PortainerSettings settingsInspect()

Retrieve Portainer settings

Retrieve Portainer settings. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.SettingsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsInspect(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PortainerSettings**](PortainerSettings.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="settingsPublic"></a>
# **settingsPublic**
> SettingsPublicSettingsResponse settingsPublic()

Retrieve Portainer public settings

Retrieve public settings. Returns a small set of settings that are not reserved to administrators only. **Access policy**: public

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.SettingsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsPublic(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SettingsPublicSettingsResponse**](SettingsPublicSettingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="settingsUpdate"></a>
# **settingsUpdate**
> PortainerSettings settingsUpdate(body)

Update Portainer settings

Update Portainer settings. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.SettingsApi();

var body = new PortainerCeApi.SettingsSettingsUpdatePayload(); // SettingsSettingsUpdatePayload | New settings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsUpdate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsSettingsUpdatePayload**](SettingsSettingsUpdatePayload.md)| New settings | 

### Return type

[**PortainerSettings**](PortainerSettings.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

