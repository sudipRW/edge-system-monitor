# PortainerCeApi.CustomTemplatesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customTemplateCreate**](CustomTemplatesApi.md#customTemplateCreate) | **POST** /custom_templates | Create a custom template
[**customTemplateCreateFile**](CustomTemplatesApi.md#customTemplateCreateFile) | **POST** /custom_templates/create/file | Create a custom template
[**customTemplateCreateRepository**](CustomTemplatesApi.md#customTemplateCreateRepository) | **POST** /custom_templates/create/repository | Create a custom template
[**customTemplateCreateString**](CustomTemplatesApi.md#customTemplateCreateString) | **POST** /custom_templates/create/string | Create a custom template
[**customTemplateDelete**](CustomTemplatesApi.md#customTemplateDelete) | **DELETE** /custom_templates/{id} | Remove a template
[**customTemplateFile**](CustomTemplatesApi.md#customTemplateFile) | **GET** /custom_templates/{id}/file | Get Template stack file content.
[**customTemplateGitFetch**](CustomTemplatesApi.md#customTemplateGitFetch) | **PUT** /custom_templates/{id}/git_fetch | Fetch the latest config file content based on custom template's git repository configuration
[**customTemplateInspect**](CustomTemplatesApi.md#customTemplateInspect) | **GET** /custom_templates/{id} | Inspect a custom template
[**customTemplateList**](CustomTemplatesApi.md#customTemplateList) | **GET** /custom_templates | List available custom templates
[**customTemplateUpdate**](CustomTemplatesApi.md#customTemplateUpdate) | **PUT** /custom_templates/{id} | Update a template


<a name="customTemplateCreate"></a>
# **customTemplateCreate**
> PortainerCustomTemplate customTemplateCreate(method, body)

Create a custom template

Create a custom template. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.CustomTemplatesApi();

var method = "method_example"; // String | method for creating template

var body = null; // Object | for body documentation see the relevant /custom_templates/{method} endpoint


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customTemplateCreate(method, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **method** | **String**| method for creating template | 
 **body** | **Object**| for body documentation see the relevant /custom_templates/{method} endpoint | 

### Return type

[**PortainerCustomTemplate**](PortainerCustomTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="customTemplateCreateFile"></a>
# **customTemplateCreateFile**
> PortainerCustomTemplate customTemplateCreateFile(title, description, note, platform, type, file, opts)

Create a custom template

Create a custom template. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.CustomTemplatesApi();

var title = "title_example"; // String | Title of the template

var description = "description_example"; // String | Description of the template

var note = "note_example"; // String | A note that will be displayed in the UI. Supports HTML content

var platform = 56; // Number | Platform associated to the template (1 - 'linux', 2 - 'windows')

var type = 56; // Number | Type of created stack (1 - swarm, 2 - compose, 3 - kubernetes)

var file = "/path/to/file.txt"; // File | File

var opts = { 
  'logo': "logo_example", // String | URL of the template's logo
  'variables': "variables_example" // String | A json array of variables definitions
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customTemplateCreateFile(title, description, note, platform, type, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| Title of the template | 
 **description** | **String**| Description of the template | 
 **note** | **String**| A note that will be displayed in the UI. Supports HTML content | 
 **platform** | **Number**| Platform associated to the template (1 - 'linux', 2 - 'windows') | 
 **type** | **Number**| Type of created stack (1 - swarm, 2 - compose, 3 - kubernetes) | 
 **file** | **File**| File | 
 **logo** | **String**| URL of the template's logo | [optional] 
 **variables** | **String**| A json array of variables definitions | [optional] 

### Return type

[**PortainerCustomTemplate**](PortainerCustomTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="customTemplateCreateRepository"></a>
# **customTemplateCreateRepository**
> PortainerCustomTemplate customTemplateCreateRepository(body)

Create a custom template

Create a custom template. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.CustomTemplatesApi();

var body = new PortainerCeApi.CustomtemplatesCustomTemplateFromGitRepositoryPayload(); // CustomtemplatesCustomTemplateFromGitRepositoryPayload | Required when using method=repository


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customTemplateCreateRepository(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomtemplatesCustomTemplateFromGitRepositoryPayload**](CustomtemplatesCustomTemplateFromGitRepositoryPayload.md)| Required when using method=repository | 

### Return type

[**PortainerCustomTemplate**](PortainerCustomTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customTemplateCreateString"></a>
# **customTemplateCreateString**
> PortainerCustomTemplate customTemplateCreateString(body)

Create a custom template

Create a custom template. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.CustomTemplatesApi();

var body = new PortainerCeApi.CustomtemplatesCustomTemplateFromFileContentPayload(); // CustomtemplatesCustomTemplateFromFileContentPayload | body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customTemplateCreateString(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomtemplatesCustomTemplateFromFileContentPayload**](CustomtemplatesCustomTemplateFromFileContentPayload.md)| body | 

### Return type

[**PortainerCustomTemplate**](PortainerCustomTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customTemplateDelete"></a>
# **customTemplateDelete**
> customTemplateDelete(id)

Remove a template

Remove a template. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.CustomTemplatesApi();

var id = 56; // Number | Template identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customTemplateDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Template identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customTemplateFile"></a>
# **customTemplateFile**
> CustomtemplatesFileResponse customTemplateFile(id)

Get Template stack file content.

Retrieve the content of the Stack file for the specified custom template **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.CustomTemplatesApi();

var id = 56; // Number | Template identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customTemplateFile(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Template identifier | 

### Return type

[**CustomtemplatesFileResponse**](CustomtemplatesFileResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="customTemplateGitFetch"></a>
# **customTemplateGitFetch**
> CustomtemplatesFileResponse customTemplateGitFetch(id)

Fetch the latest config file content based on custom template's git repository configuration

Retrieve details about a template created from git repository method. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.CustomTemplatesApi();

var id = 56; // Number | Template identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customTemplateGitFetch(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Template identifier | 

### Return type

[**CustomtemplatesFileResponse**](CustomtemplatesFileResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="customTemplateInspect"></a>
# **customTemplateInspect**
> PortainerCustomTemplate customTemplateInspect(id)

Inspect a custom template

Retrieve details about a template. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.CustomTemplatesApi();

var id = 56; // Number | Template identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customTemplateInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Template identifier | 

### Return type

[**PortainerCustomTemplate**](PortainerCustomTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="customTemplateList"></a>
# **customTemplateList**
> [PortainerCustomTemplate] customTemplateList(type, opts)

List available custom templates

List available custom templates. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.CustomTemplatesApi();

var type = [3.4]; // [Number] | Template types

var opts = { 
  'edge': true // Boolean | Filter by edge templates
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customTemplateList(type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**[Number]**](Number.md)| Template types | 
 **edge** | **Boolean**| Filter by edge templates | [optional] 

### Return type

[**[PortainerCustomTemplate]**](PortainerCustomTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="customTemplateUpdate"></a>
# **customTemplateUpdate**
> PortainerCustomTemplate customTemplateUpdate(id, body)

Update a template

Update a template. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.CustomTemplatesApi();

var id = 56; // Number | Template identifier

var body = new PortainerCeApi.CustomtemplatesCustomTemplateUpdatePayload(); // CustomtemplatesCustomTemplateUpdatePayload | Template details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customTemplateUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Template identifier | 
 **body** | [**CustomtemplatesCustomTemplateUpdatePayload**](CustomtemplatesCustomTemplateUpdatePayload.md)| Template details | 

### Return type

[**PortainerCustomTemplate**](PortainerCustomTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

