# PortainerCeApi.AuthApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateUser**](AuthApi.md#authenticateUser) | **POST** /auth | Authenticate
[**logout**](AuthApi.md#logout) | **POST** /auth/logout | Logout
[**validateOAuth**](AuthApi.md#validateOAuth) | **POST** /auth/oauth/validate | Authenticate with OAuth


<a name="authenticateUser"></a>
# **authenticateUser**
> AuthAuthenticateResponse authenticateUser(body)

Authenticate

**Access policy**: public Use this environment(endpoint) to authenticate against Portainer using a username and password.

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.AuthApi();

var body = new PortainerCeApi.AuthAuthenticatePayload(); // AuthAuthenticatePayload | Credentials used for authentication


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authenticateUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthAuthenticatePayload**](AuthAuthenticatePayload.md)| Credentials used for authentication | 

### Return type

[**AuthAuthenticateResponse**](AuthAuthenticateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> logout()

Logout

**Access policy**: public

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

var apiInstance = new PortainerCeApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.logout(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="validateOAuth"></a>
# **validateOAuth**
> AuthAuthenticateResponse validateOAuth(body)

Authenticate with OAuth

**Access policy**: public

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.AuthApi();

var body = new PortainerCeApi.AuthOauthPayload(); // AuthOauthPayload | OAuth Credentials used for authentication


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateOAuth(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthOauthPayload**](AuthOauthPayload.md)| OAuth Credentials used for authentication | 

### Return type

[**AuthAuthenticateResponse**](AuthAuthenticateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

