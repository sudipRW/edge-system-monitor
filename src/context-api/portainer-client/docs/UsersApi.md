# PortainerCeApi.UsersApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**currentUserInspect**](UsersApi.md#currentUserInspect) | **GET** /users/me | Inspect the current user user
[**userAdminCheck**](UsersApi.md#userAdminCheck) | **GET** /users/admin/check | Check administrator account existence
[**userAdminInit**](UsersApi.md#userAdminInit) | **POST** /users/admin/init | Initialize administrator account
[**userCreate**](UsersApi.md#userCreate) | **POST** /users | Create a new user
[**userDelete**](UsersApi.md#userDelete) | **DELETE** /users/{id} | Remove a user
[**userGenerateAPIKey**](UsersApi.md#userGenerateAPIKey) | **POST** /users/{id}/tokens | Generate an API key for a user
[**userGetAPIKeys**](UsersApi.md#userGetAPIKeys) | **GET** /users/{id}/tokens | Get all API keys for a user
[**userInspect**](UsersApi.md#userInspect) | **GET** /users/{id} | Inspect a user
[**userList**](UsersApi.md#userList) | **GET** /users | List users
[**userMembershipsInspect**](UsersApi.md#userMembershipsInspect) | **GET** /users/{id}/memberships | Inspect a user memberships
[**userRemoveAPIKey**](UsersApi.md#userRemoveAPIKey) | **DELETE** /users/{id}/tokens/{keyID} | Remove an api-key associated to a user
[**userUpdate**](UsersApi.md#userUpdate) | **PUT** /users/{id} | Update a user
[**userUpdatePassword**](UsersApi.md#userUpdatePassword) | **PUT** /users/{id}/passwd | Update password for a user


<a name="currentUserInspect"></a>
# **currentUserInspect**
> PortainerUser currentUserInspect()

Inspect the current user user

Retrieve details about the current  user. User passwords are filtered out, and should never be accessible. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.currentUserInspect(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PortainerUser**](PortainerUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userAdminCheck"></a>
# **userAdminCheck**
> userAdminCheck()

Check administrator account existence

Check if an administrator account exists in the database. **Access policy**: public

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userAdminCheck(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userAdminInit"></a>
# **userAdminInit**
> PortainerUser userAdminInit(body)

Initialize administrator account

Initialize the 'admin' user account. **Access policy**: public

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.UsersApi();

var body = new PortainerCeApi.UsersAdminInitPayload(); // UsersAdminInitPayload | User details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userAdminInit(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersAdminInitPayload**](UsersAdminInitPayload.md)| User details | 

### Return type

[**PortainerUser**](PortainerUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCreate"></a>
# **userCreate**
> PortainerUser userCreate(body)

Create a new user

Create a new Portainer user. Only administrators can create users. **Access policy**: restricted

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

var apiInstance = new PortainerCeApi.UsersApi();

var body = new PortainerCeApi.UsersUserCreatePayload(); // UsersUserCreatePayload | User details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersUserCreatePayload**](UsersUserCreatePayload.md)| User details | 

### Return type

[**PortainerUser**](PortainerUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userDelete"></a>
# **userDelete**
> userDelete(id)

Remove a user

Remove a user. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.UsersApi();

var id = 56; // Number | User identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userGenerateAPIKey"></a>
# **userGenerateAPIKey**
> UsersAccessTokenResponse userGenerateAPIKey(id, body)

Generate an API key for a user

Generates an API key for a user. Only the calling user can generate a token for themselves. Password is required only for internal authentication. **Access policy**: restricted

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.UsersApi();

var id = 56; // Number | User identifier

var body = new PortainerCeApi.UsersUserAccessTokenCreatePayload(); // UsersUserAccessTokenCreatePayload | details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGenerateAPIKey(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 
 **body** | [**UsersUserAccessTokenCreatePayload**](UsersUserAccessTokenCreatePayload.md)| details | 

### Return type

[**UsersAccessTokenResponse**](UsersAccessTokenResponse.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userGetAPIKeys"></a>
# **userGetAPIKeys**
> [PortainerAPIKey] userGetAPIKeys(id)

Get all API keys for a user

Gets all API keys for a user. Only the calling user or admin can retrieve api-keys. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.UsersApi();

var id = 56; // Number | User identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGetAPIKeys(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 

### Return type

[**[PortainerAPIKey]**](PortainerAPIKey.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userInspect"></a>
# **userInspect**
> PortainerUser userInspect(id)

Inspect a user

Retrieve details about a user. User passwords are filtered out, and should never be accessible. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.UsersApi();

var id = 56; // Number | User identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 

### Return type

[**PortainerUser**](PortainerUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userList"></a>
# **userList**
> [PortainerUser] userList(opts)

List users

List Portainer users. Non-administrator users will only be able to list other non-administrator user accounts. User passwords are filtered out, and should never be accessible. **Access policy**: restricted

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

var apiInstance = new PortainerCeApi.UsersApi();

var opts = { 
  'environmentId': 56 // Number | Identifier of the environment(endpoint) that will be used to filter the authorized users
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | **Number**| Identifier of the environment(endpoint) that will be used to filter the authorized users | [optional] 

### Return type

[**[PortainerUser]**](PortainerUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userMembershipsInspect"></a>
# **userMembershipsInspect**
> PortainerTeamMembership userMembershipsInspect(id)

Inspect a user memberships

Inspect a user memberships. **Access policy**: restricted

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

var apiInstance = new PortainerCeApi.UsersApi();

var id = 56; // Number | User identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userMembershipsInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 

### Return type

[**PortainerTeamMembership**](PortainerTeamMembership.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userRemoveAPIKey"></a>
# **userRemoveAPIKey**
> userRemoveAPIKey(id, keyID)

Remove an api-key associated to a user

Remove an api-key associated to a user.. Only the calling user or admin can remove api-key. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.UsersApi();

var id = 56; // Number | User identifier

var keyID = 56; // Number | Api Key identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userRemoveAPIKey(id, keyID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 
 **keyID** | **Number**| Api Key identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userUpdate"></a>
# **userUpdate**
> PortainerUser userUpdate(id, body)

Update a user

Update user details. A regular user account can only update his details. A regular user account cannot change their username or role. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.UsersApi();

var id = 56; // Number | User identifier

var body = new PortainerCeApi.UsersUserUpdatePayload(); // UsersUserUpdatePayload | User details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 
 **body** | [**UsersUserUpdatePayload**](UsersUserUpdatePayload.md)| User details | 

### Return type

[**PortainerUser**](PortainerUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userUpdatePassword"></a>
# **userUpdatePassword**
> userUpdatePassword(id, body)

Update password for a user

Update password for the specified user. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.UsersApi();

var id = 56; // Number | identifier

var body = new PortainerCeApi.UsersUserUpdatePasswordPayload(); // UsersUserUpdatePasswordPayload | details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userUpdatePassword(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| identifier | 
 **body** | [**UsersUserUpdatePasswordPayload**](UsersUserUpdatePasswordPayload.md)| details | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

