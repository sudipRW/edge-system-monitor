# PortainerCeApi.TeamMembershipsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamMembershipCreate**](TeamMembershipsApi.md#teamMembershipCreate) | **POST** /team_memberships | Create a new team membership
[**teamMembershipDelete**](TeamMembershipsApi.md#teamMembershipDelete) | **DELETE** /team_memberships/{id} | Remove a team membership
[**teamMembershipList**](TeamMembershipsApi.md#teamMembershipList) | **GET** /team_memberships | List team memberships
[**teamMembershipUpdate**](TeamMembershipsApi.md#teamMembershipUpdate) | **PUT** /team_memberships/{id} | Update a team membership
[**teamMemberships**](TeamMembershipsApi.md#teamMemberships) | **GET** /teams/{id}/memberships | List team memberships


<a name="teamMembershipCreate"></a>
# **teamMembershipCreate**
> PortainerTeamMembership teamMembershipCreate(body)

Create a new team membership

Create a new team memberships. Access is only available to administrators leaders of the associated team. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.TeamMembershipsApi();

var body = new PortainerCeApi.TeammembershipsTeamMembershipCreatePayload(); // TeammembershipsTeamMembershipCreatePayload | Team membership details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamMembershipCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TeammembershipsTeamMembershipCreatePayload**](TeammembershipsTeamMembershipCreatePayload.md)| Team membership details | 

### Return type

[**PortainerTeamMembership**](PortainerTeamMembership.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamMembershipDelete"></a>
# **teamMembershipDelete**
> teamMembershipDelete(id)

Remove a team membership

Remove a team membership. Access is only available to administrators leaders of the associated team. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.TeamMembershipsApi();

var id = 56; // Number | TeamMembership identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamMembershipDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| TeamMembership identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="teamMembershipList"></a>
# **teamMembershipList**
> [PortainerTeamMembership] teamMembershipList()

List team memberships

List team memberships. Access is only available to administrators and team leaders. **Access policy**: administrator

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

var apiInstance = new PortainerCeApi.TeamMembershipsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamMembershipList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PortainerTeamMembership]**](PortainerTeamMembership.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamMembershipUpdate"></a>
# **teamMembershipUpdate**
> PortainerTeamMembership teamMembershipUpdate(id, body)

Update a team membership

Update a team membership. Access is only available to administrators or leaders of the associated team. **Access policy**: administrator or leaders of the associated team

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

var apiInstance = new PortainerCeApi.TeamMembershipsApi();

var id = 56; // Number | Team membership identifier

var body = new PortainerCeApi.TeammembershipsTeamMembershipUpdatePayload(); // TeammembershipsTeamMembershipUpdatePayload | Team membership details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamMembershipUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Team membership identifier | 
 **body** | [**TeammembershipsTeamMembershipUpdatePayload**](TeammembershipsTeamMembershipUpdatePayload.md)| Team membership details | 

### Return type

[**PortainerTeamMembership**](PortainerTeamMembership.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamMemberships"></a>
# **teamMemberships**
> [PortainerTeamMembership] teamMemberships(id)

List team memberships

List team memberships. Access is only available to administrators and team leaders. **Access policy**: restricted

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

var apiInstance = new PortainerCeApi.TeamMembershipsApi();

var id = 56; // Number | Team Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamMemberships(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Team Id | 

### Return type

[**[PortainerTeamMembership]**](PortainerTeamMembership.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

