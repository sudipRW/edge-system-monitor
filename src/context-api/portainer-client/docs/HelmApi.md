# PortainerCeApi.HelmApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**helmDelete**](HelmApi.md#helmDelete) | **DELETE** /endpoints/{id}/kubernetes/helm/{release} | Delete Helm Release
[**helmInstall**](HelmApi.md#helmInstall) | **POST** /endpoints/{id}/kubernetes/helm | Install Helm Chart
[**helmList**](HelmApi.md#helmList) | **GET** /endpoints/{id}/kubernetes/helm | List Helm Releases
[**helmRepoSearch**](HelmApi.md#helmRepoSearch) | **GET** /templates/helm | Search Helm Charts
[**helmShow**](HelmApi.md#helmShow) | **GET** /templates/helm/{command} | Show Helm Chart Information
[**helmUserRepositoriesList**](HelmApi.md#helmUserRepositoriesList) | **GET** /users/{id}/helm/repositories | List a users helm repositories
[**helmUserRepositoriesListDeprecated**](HelmApi.md#helmUserRepositoriesListDeprecated) | **GET** /endpoints/{id}/kubernetes/helm/repositories | List a users helm repositories
[**helmUserRepositoryCreate**](HelmApi.md#helmUserRepositoryCreate) | **POST** /users/{id}/helm/repositories | Create a user helm repository
[**helmUserRepositoryCreateDeprecated**](HelmApi.md#helmUserRepositoryCreateDeprecated) | **POST** /endpoints/{id}/kubernetes/helm/repositories | Create a user helm repository
[**helmUserRepositoryDelete**](HelmApi.md#helmUserRepositoryDelete) | **DELETE** /users/{id}/helm/repositories/{repositoryID} | Delete a users helm repositoryies


<a name="helmDelete"></a>
# **helmDelete**
> helmDelete(id, release, opts)

Delete Helm Release

**Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.HelmApi();

var id = 56; // Number | Environment(Endpoint) identifier

var release = "release_example"; // String | The name of the release/application to uninstall

var opts = { 
  'namespace': "namespace_example" // String | An optional namespace
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.helmDelete(id, release, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 
 **release** | **String**| The name of the release/application to uninstall | 
 **namespace** | **String**| An optional namespace | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="helmInstall"></a>
# **helmInstall**
> ReleaseRelease helmInstall(id, payload)

Install Helm Chart

**Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.HelmApi();

var id = 56; // Number | Environment(Endpoint) identifier

var payload = new PortainerCeApi.HelmInstallChartPayload(); // HelmInstallChartPayload | Chart details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.helmInstall(id, payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 
 **payload** | [**HelmInstallChartPayload**](HelmInstallChartPayload.md)| Chart details | 

### Return type

[**ReleaseRelease**](ReleaseRelease.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="helmList"></a>
# **helmList**
> [ReleaseReleaseElement] helmList(id, opts)

List Helm Releases

**Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.HelmApi();

var id = 56; // Number | Environment(Endpoint) identifier

var opts = { 
  'namespace': "namespace_example", // String | specify an optional namespace
  'filter': "filter_example", // String | specify an optional filter
  'selector': "selector_example" // String | specify an optional selector
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.helmList(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 
 **namespace** | **String**| specify an optional namespace | [optional] 
 **filter** | **String**| specify an optional filter | [optional] 
 **selector** | **String**| specify an optional selector | [optional] 

### Return type

[**[ReleaseReleaseElement]**](ReleaseReleaseElement.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="helmRepoSearch"></a>
# **helmRepoSearch**
> 'String' helmRepoSearch(repo)

Search Helm Charts

**Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.HelmApi();

var repo = "repo_example"; // String | Helm repository URL


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.helmRepoSearch(repo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | **String**| Helm repository URL | 

### Return type

**'String'**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="helmShow"></a>
# **helmShow**
> 'String' helmShow(repo, chart, command)

Show Helm Chart Information

**Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.HelmApi();

var repo = "repo_example"; // String | Helm repository URL

var chart = "chart_example"; // String | Chart name

var command = "command_example"; // String | chart/values/readme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.helmShow(repo, chart, command, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | **String**| Helm repository URL | 
 **chart** | **String**| Chart name | 
 **command** | **String**| chart/values/readme | 

### Return type

**'String'**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="helmUserRepositoriesList"></a>
# **helmUserRepositoriesList**
> UsersHelmUserRepositoryResponse helmUserRepositoriesList(id)

List a users helm repositories

Inspect a user helm repositories. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.HelmApi();

var id = 56; // Number | User identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.helmUserRepositoriesList(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 

### Return type

[**UsersHelmUserRepositoryResponse**](UsersHelmUserRepositoryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="helmUserRepositoriesListDeprecated"></a>
# **helmUserRepositoriesListDeprecated**
> HelmHelmUserRepositoryResponse helmUserRepositoriesListDeprecated(id)

List a users helm repositories

Inspect a user helm repositories. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.HelmApi();

var id = 56; // Number | User identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.helmUserRepositoriesListDeprecated(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 

### Return type

[**HelmHelmUserRepositoryResponse**](HelmHelmUserRepositoryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="helmUserRepositoryCreate"></a>
# **helmUserRepositoryCreate**
> PortainerHelmUserRepository helmUserRepositoryCreate(id, payload)

Create a user helm repository

Create a user helm repository. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.HelmApi();

var id = 56; // Number | User identifier

var payload = new PortainerCeApi.UsersAddHelmRepoUrlPayload(); // UsersAddHelmRepoUrlPayload | Helm Repository


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.helmUserRepositoryCreate(id, payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 
 **payload** | [**UsersAddHelmRepoUrlPayload**](UsersAddHelmRepoUrlPayload.md)| Helm Repository | 

### Return type

[**PortainerHelmUserRepository**](PortainerHelmUserRepository.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="helmUserRepositoryCreateDeprecated"></a>
# **helmUserRepositoryCreateDeprecated**
> PortainerHelmUserRepository helmUserRepositoryCreateDeprecated(id, payload)

Create a user helm repository

Create a user helm repository. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.HelmApi();

var id = 56; // Number | Environment(Endpoint) identifier

var payload = new PortainerCeApi.HelmAddHelmRepoUrlPayload(); // HelmAddHelmRepoUrlPayload | Helm Repository


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.helmUserRepositoryCreateDeprecated(id, payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 
 **payload** | [**HelmAddHelmRepoUrlPayload**](HelmAddHelmRepoUrlPayload.md)| Helm Repository | 

### Return type

[**PortainerHelmUserRepository**](PortainerHelmUserRepository.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="helmUserRepositoryDelete"></a>
# **helmUserRepositoryDelete**
> helmUserRepositoryDelete(id, repositoryID)

Delete a users helm repositoryies

**Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.HelmApi();

var id = 56; // Number | User identifier

var repositoryID = 56; // Number | Repository identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.helmUserRepositoryDelete(id, repositoryID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 
 **repositoryID** | **Number**| Repository identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

