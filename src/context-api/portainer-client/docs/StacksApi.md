# PortainerCeApi.StacksApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stackAssociate**](StacksApi.md#stackAssociate) | **PUT** /stacks/{id}/associate | Associate an orphaned stack to a new environment(endpoint)
[**stackCreate**](StacksApi.md#stackCreate) | **POST** /stacks | Deploy a new stack
[**stackCreateDockerStandaloneFile**](StacksApi.md#stackCreateDockerStandaloneFile) | **POST** /stacks/create/standalone/file | Deploy a new compose stack from a file
[**stackCreateDockerStandaloneRepository**](StacksApi.md#stackCreateDockerStandaloneRepository) | **POST** /stacks/create/standalone/repository | Deploy a new compose stack from repository
[**stackCreateDockerStandaloneString**](StacksApi.md#stackCreateDockerStandaloneString) | **POST** /stacks/create/standalone/string | Deploy a new compose stack from a text
[**stackCreateDockerSwarmFile**](StacksApi.md#stackCreateDockerSwarmFile) | **POST** /stacks/create/swarm/file | Deploy a new swarm stack from a file
[**stackCreateDockerSwarmRepository**](StacksApi.md#stackCreateDockerSwarmRepository) | **POST** /stacks/create/swarm/repository | Deploy a new swarm stack from a git repository
[**stackCreateDockerSwarmString**](StacksApi.md#stackCreateDockerSwarmString) | **POST** /stacks/create/swarm/string | Deploy a new swarm stack from a text
[**stackCreateKubernetesFile**](StacksApi.md#stackCreateKubernetesFile) | **POST** /stacks/create/kubernetes/string | Deploy a new kubernetes stack from a file
[**stackCreateKubernetesGit**](StacksApi.md#stackCreateKubernetesGit) | **POST** /stacks/create/kubernetes/repository | Deploy a new kubernetes stack from a git repository
[**stackCreateKubernetesUrl**](StacksApi.md#stackCreateKubernetesUrl) | **POST** /stacks/create/kubernetes/url | Deploy a new kubernetes stack from a url
[**stackDelete**](StacksApi.md#stackDelete) | **DELETE** /stacks/{id} | Remove a stack
[**stackDeleteKubernetesByName**](StacksApi.md#stackDeleteKubernetesByName) | **DELETE** /stacks/name/{name} | Remove Kubernetes stacks by name
[**stackFileInspect**](StacksApi.md#stackFileInspect) | **GET** /stacks/{id}/file | Retrieve the content of the Stack file for the specified stack
[**stackGitRedeploy**](StacksApi.md#stackGitRedeploy) | **PUT** /stacks/{id}/git/redeploy | Redeploy a stack
[**stackInspect**](StacksApi.md#stackInspect) | **GET** /stacks/{id} | Inspect a stack
[**stackList**](StacksApi.md#stackList) | **GET** /stacks | List stacks
[**stackMigrate**](StacksApi.md#stackMigrate) | **POST** /stacks/{id}/migrate | Migrate a stack to another environment(endpoint)
[**stackStart**](StacksApi.md#stackStart) | **POST** /stacks/{id}/start | Starts a stopped Stack
[**stackStop**](StacksApi.md#stackStop) | **POST** /stacks/{id}/stop | Stops a stopped Stack
[**stackUpdate**](StacksApi.md#stackUpdate) | **PUT** /stacks/{id} | Update a stack
[**stackUpdateGit**](StacksApi.md#stackUpdateGit) | **POST** /stacks/{id}/git | Update a stack's Git configs
[**webhookInvoke**](StacksApi.md#webhookInvoke) | **POST** /stacks/webhooks/{webhookID} | Webhook for triggering stack updates from git


<a name="stackAssociate"></a>
# **stackAssociate**
> PortainerStack stackAssociate(id, endpointId, swarmId, orphanedRunning)

Associate an orphaned stack to a new environment(endpoint)

**Access policy**: administrator

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

var apiInstance = new PortainerCeApi.StacksApi();

var id = 56; // Number | Stack identifier

var endpointId = 56; // Number | Environment identifier

var swarmId = 56; // Number | Swarm identifier

var orphanedRunning = true; // Boolean | Indicates whether the stack is orphaned


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackAssociate(id, endpointId, swarmId, orphanedRunning, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 
 **endpointId** | **Number**| Environment identifier | 
 **swarmId** | **Number**| Swarm identifier | 
 **orphanedRunning** | **Boolean**| Indicates whether the stack is orphaned | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stackCreate"></a>
# **stackCreate**
> PortainerStack stackCreate(type, method, endpointId, body)

Deploy a new stack

Deploy a new stack into a Docker environment(endpoint) specified via the environment(endpoint) identifier. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var type = 56; // Number | Stack deployment type. Possible values: 1 (Swarm stack), 2 (Compose stack) or 3 (Kubernetes stack).

var method = "method_example"; // String | Stack deployment method. Possible values: file, string, repository or url.

var endpointId = 56; // Number | Identifier of the environment(endpoint) that will be used to deploy the stack

var body = null; // Object | for body documentation see the relevant /stacks/create/{type}/{method} endpoint


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackCreate(type, method, endpointId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **Number**| Stack deployment type. Possible values: 1 (Swarm stack), 2 (Compose stack) or 3 (Kubernetes stack). | 
 **method** | **String**| Stack deployment method. Possible values: file, string, repository or url. | 
 **endpointId** | **Number**| Identifier of the environment(endpoint) that will be used to deploy the stack | 
 **body** | **Object**| for body documentation see the relevant /stacks/create/{type}/{method} endpoint | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="stackCreateDockerStandaloneFile"></a>
# **stackCreateDockerStandaloneFile**
> PortainerStack stackCreateDockerStandaloneFile(name, endpointId, opts)

Deploy a new compose stack from a file

Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var name = "name_example"; // String | Name of the stack

var endpointId = 56; // Number | Identifier of the environment that will be used to deploy the stack

var opts = { 
  'env': "env_example", // String | Environment variables passed during deployment, represented as a JSON array [{'name': 'name', 'value': 'value'}].
  'file': "/path/to/file.txt" // File | Stack file
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackCreateDockerStandaloneFile(name, endpointId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the stack | 
 **endpointId** | **Number**| Identifier of the environment that will be used to deploy the stack | 
 **env** | **String**| Environment variables passed during deployment, represented as a JSON array [{'name': 'name', 'value': 'value'}]. | [optional] 
 **file** | **File**| Stack file | [optional] 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="stackCreateDockerStandaloneRepository"></a>
# **stackCreateDockerStandaloneRepository**
> PortainerStack stackCreateDockerStandaloneRepository(endpointId, body)

Deploy a new compose stack from repository

Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var endpointId = 56; // Number | Identifier of the environment that will be used to deploy the stack

var body = new PortainerCeApi.StacksComposeStackFromGitRepositoryPayload(); // StacksComposeStackFromGitRepositoryPayload | stack config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackCreateDockerStandaloneRepository(endpointId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **Number**| Identifier of the environment that will be used to deploy the stack | 
 **body** | [**StacksComposeStackFromGitRepositoryPayload**](StacksComposeStackFromGitRepositoryPayload.md)| stack config | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="stackCreateDockerStandaloneString"></a>
# **stackCreateDockerStandaloneString**
> PortainerStack stackCreateDockerStandaloneString(body, endpointId)

Deploy a new compose stack from a text

Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var body = new PortainerCeApi.StacksComposeStackFromFileContentPayload(); // StacksComposeStackFromFileContentPayload | stack config

var endpointId = 56; // Number | Identifier of the environment that will be used to deploy the stack


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackCreateDockerStandaloneString(body, endpointId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**StacksComposeStackFromFileContentPayload**](StacksComposeStackFromFileContentPayload.md)| stack config | 
 **endpointId** | **Number**| Identifier of the environment that will be used to deploy the stack | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="stackCreateDockerSwarmFile"></a>
# **stackCreateDockerSwarmFile**
> PortainerStack stackCreateDockerSwarmFile(endpointId, opts)

Deploy a new swarm stack from a file

Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var endpointId = 56; // Number | Identifier of the environment that will be used to deploy the stack

var opts = { 
  'name': "name_example", // String | Name of the stack
  'swarmID': "swarmID_example", // String | Swarm cluster identifier.
  'env': "env_example", // String | Environment variables passed during deployment, represented as a JSON array [{'name': 'name', 'value': 'value'}]. Optional
  'file': "/path/to/file.txt" // File | Stack file
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackCreateDockerSwarmFile(endpointId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **Number**| Identifier of the environment that will be used to deploy the stack | 
 **name** | **String**| Name of the stack | [optional] 
 **swarmID** | **String**| Swarm cluster identifier. | [optional] 
 **env** | **String**| Environment variables passed during deployment, represented as a JSON array [{'name': 'name', 'value': 'value'}]. Optional | [optional] 
 **file** | **File**| Stack file | [optional] 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="stackCreateDockerSwarmRepository"></a>
# **stackCreateDockerSwarmRepository**
> PortainerStack stackCreateDockerSwarmRepository(endpointId, body)

Deploy a new swarm stack from a git repository

Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var endpointId = 56; // Number | Identifier of the environment that will be used to deploy the stack

var body = new PortainerCeApi.StacksSwarmStackFromGitRepositoryPayload(); // StacksSwarmStackFromGitRepositoryPayload | stack config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackCreateDockerSwarmRepository(endpointId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **Number**| Identifier of the environment that will be used to deploy the stack | 
 **body** | [**StacksSwarmStackFromGitRepositoryPayload**](StacksSwarmStackFromGitRepositoryPayload.md)| stack config | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="stackCreateDockerSwarmString"></a>
# **stackCreateDockerSwarmString**
> PortainerStack stackCreateDockerSwarmString(body, endpointId)

Deploy a new swarm stack from a text

Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var body = new PortainerCeApi.StacksSwarmStackFromFileContentPayload(); // StacksSwarmStackFromFileContentPayload | stack config

var endpointId = 56; // Number | Identifier of the environment that will be used to deploy the stack


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackCreateDockerSwarmString(body, endpointId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**StacksSwarmStackFromFileContentPayload**](StacksSwarmStackFromFileContentPayload.md)| stack config | 
 **endpointId** | **Number**| Identifier of the environment that will be used to deploy the stack | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="stackCreateKubernetesFile"></a>
# **stackCreateKubernetesFile**
> PortainerStack stackCreateKubernetesFile(body, endpointId)

Deploy a new kubernetes stack from a file

Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var body = new PortainerCeApi.StacksKubernetesStringDeploymentPayload(); // StacksKubernetesStringDeploymentPayload | stack config

var endpointId = 56; // Number | Identifier of the environment that will be used to deploy the stack


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackCreateKubernetesFile(body, endpointId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**StacksKubernetesStringDeploymentPayload**](StacksKubernetesStringDeploymentPayload.md)| stack config | 
 **endpointId** | **Number**| Identifier of the environment that will be used to deploy the stack | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stackCreateKubernetesGit"></a>
# **stackCreateKubernetesGit**
> PortainerStack stackCreateKubernetesGit(body, endpointId)

Deploy a new kubernetes stack from a git repository

Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var body = new PortainerCeApi.StacksKubernetesGitDeploymentPayload(); // StacksKubernetesGitDeploymentPayload | stack config

var endpointId = 56; // Number | Identifier of the environment that will be used to deploy the stack


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackCreateKubernetesGit(body, endpointId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**StacksKubernetesGitDeploymentPayload**](StacksKubernetesGitDeploymentPayload.md)| stack config | 
 **endpointId** | **Number**| Identifier of the environment that will be used to deploy the stack | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stackCreateKubernetesUrl"></a>
# **stackCreateKubernetesUrl**
> PortainerStack stackCreateKubernetesUrl(body, endpointId)

Deploy a new kubernetes stack from a url

Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var body = new PortainerCeApi.StacksKubernetesManifestURLDeploymentPayload(); // StacksKubernetesManifestURLDeploymentPayload | stack config

var endpointId = 56; // Number | Identifier of the environment that will be used to deploy the stack


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackCreateKubernetesUrl(body, endpointId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**StacksKubernetesManifestURLDeploymentPayload**](StacksKubernetesManifestURLDeploymentPayload.md)| stack config | 
 **endpointId** | **Number**| Identifier of the environment that will be used to deploy the stack | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stackDelete"></a>
# **stackDelete**
> stackDelete(id, endpointId, opts)

Remove a stack

Remove a stack. **Access policy**: restricted

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

var apiInstance = new PortainerCeApi.StacksApi();

var id = 56; // Number | Stack identifier

var endpointId = 56; // Number | Environment identifier

var opts = { 
  'external': true // Boolean | Set to true to delete an external stack. Only external Swarm stacks are supported
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.stackDelete(id, endpointId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 
 **endpointId** | **Number**| Environment identifier | 
 **external** | **Boolean**| Set to true to delete an external stack. Only external Swarm stacks are supported | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="stackDeleteKubernetesByName"></a>
# **stackDeleteKubernetesByName**
> stackDeleteKubernetesByName(name, endpointId, opts)

Remove Kubernetes stacks by name

Remove a stack. **Access policy**: restricted

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

var apiInstance = new PortainerCeApi.StacksApi();

var name = "name_example"; // String | Stack name

var endpointId = 56; // Number | Environment identifier

var opts = { 
  'external': true // Boolean | Set to true to delete an external stack. Only external Swarm stacks are supported
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.stackDeleteKubernetesByName(name, endpointId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Stack name | 
 **endpointId** | **Number**| Environment identifier | 
 **external** | **Boolean**| Set to true to delete an external stack. Only external Swarm stacks are supported | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="stackFileInspect"></a>
# **stackFileInspect**
> StacksStackFileResponse stackFileInspect(id)

Retrieve the content of the Stack file for the specified stack

Get Stack file content. **Access policy**: restricted

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

var apiInstance = new PortainerCeApi.StacksApi();

var id = 56; // Number | Stack identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackFileInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 

### Return type

[**StacksStackFileResponse**](StacksStackFileResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stackGitRedeploy"></a>
# **stackGitRedeploy**
> PortainerStack stackGitRedeploy(id, body, opts)

Redeploy a stack

Pull and redeploy a stack via Git **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var id = 56; // Number | Stack identifier

var body = new PortainerCeApi.StacksStackGitRedployPayload(); // StacksStackGitRedployPayload | Git configs for pull and redeploy of a stack. **StackName** may only be populated for Kuberenetes stacks, and if specified with a blank string, it will be set to blank

var opts = { 
  'endpointId': 56 // Number | Stacks created before version 1.18.0 might not have an associated environment(endpoint) identifier. Use this optional parameter to set the environment(endpoint) identifier used by the stack.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackGitRedeploy(id, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 
 **body** | [**StacksStackGitRedployPayload**](StacksStackGitRedployPayload.md)| Git configs for pull and redeploy of a stack. **StackName** may only be populated for Kuberenetes stacks, and if specified with a blank string, it will be set to blank | 
 **endpointId** | **Number**| Stacks created before version 1.18.0 might not have an associated environment(endpoint) identifier. Use this optional parameter to set the environment(endpoint) identifier used by the stack. | [optional] 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="stackInspect"></a>
# **stackInspect**
> PortainerStack stackInspect(id)

Inspect a stack

Retrieve details about a stack. **Access policy**: restricted

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

var apiInstance = new PortainerCeApi.StacksApi();

var id = 56; // Number | Stack identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stackList"></a>
# **stackList**
> [PortainerStack] stackList(opts)

List stacks

List all stacks based on the current user authorizations. Will return all stacks if using an administrator account otherwise it will only return the list of stacks the user have access to. Limited stacks will not be returned by this endpoint. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var opts = { 
  'filters': "filters_example" // String | Filters to process on the stack list. Encoded as JSON (a map[string]string). For example, {'SwarmID': 'jpofkc0i9uo9wtx1zesuk649w'} will only return stacks that are part of the specified Swarm cluster. Available filters: EndpointID, SwarmID.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| Filters to process on the stack list. Encoded as JSON (a map[string]string). For example, {'SwarmID': 'jpofkc0i9uo9wtx1zesuk649w'} will only return stacks that are part of the specified Swarm cluster. Available filters: EndpointID, SwarmID. | [optional] 

### Return type

[**[PortainerStack]**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="stackMigrate"></a>
# **stackMigrate**
> PortainerStack stackMigrate(id, body, opts)

Migrate a stack to another environment(endpoint)

Migrate a stack from an environment(endpoint) to another environment(endpoint). It will re-create the stack inside the target environment(endpoint) before removing the original stack. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var id = 56; // Number | Stack identifier

var body = new PortainerCeApi.StacksStackMigratePayload(); // StacksStackMigratePayload | Stack migration details

var opts = { 
  'endpointId': 56 // Number | Stacks created before version 1.18.0 might not have an associated environment(endpoint) identifier. Use this optional parameter to set the environment(endpoint) identifier used by the stack.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackMigrate(id, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 
 **body** | [**StacksStackMigratePayload**](StacksStackMigratePayload.md)| Stack migration details | 
 **endpointId** | **Number**| Stacks created before version 1.18.0 might not have an associated environment(endpoint) identifier. Use this optional parameter to set the environment(endpoint) identifier used by the stack. | [optional] 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stackStart"></a>
# **stackStart**
> PortainerStack stackStart(id, endpointId)

Starts a stopped Stack

Starts a stopped Stack. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var id = 56; // Number | Stack identifier

var endpointId = 56; // Number | Environment identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackStart(id, endpointId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 
 **endpointId** | **Number**| Environment identifier | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="stackStop"></a>
# **stackStop**
> PortainerStack stackStop(id, endpointId)

Stops a stopped Stack

Stops a stopped Stack. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var id = 56; // Number | Stack identifier

var endpointId = 56; // Number | Environment identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackStop(id, endpointId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 
 **endpointId** | **Number**| Environment identifier | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="stackUpdate"></a>
# **stackUpdate**
> PortainerStack stackUpdate(id, endpointId, body)

Update a stack

Update a stack, only for file based stacks. **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var id = 56; // Number | Stack identifier

var endpointId = 56; // Number | Environment identifier

var body = new PortainerCeApi.StacksUpdateSwarmStackPayload(); // StacksUpdateSwarmStackPayload | Stack details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackUpdate(id, endpointId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 
 **endpointId** | **Number**| Environment identifier | 
 **body** | [**StacksUpdateSwarmStackPayload**](StacksUpdateSwarmStackPayload.md)| Stack details | 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="stackUpdateGit"></a>
# **stackUpdateGit**
> PortainerStack stackUpdateGit(id, body, opts)

Update a stack's Git configs

Update the Git settings in a stack, e.g., RepositoryReferenceName and AutoUpdate **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.StacksApi();

var id = 56; // Number | Stack identifier

var body = new PortainerCeApi.StacksStackGitUpdatePayload(); // StacksStackGitUpdatePayload | Git configs for pull and redeploy a stack

var opts = { 
  'endpointId': 56 // Number | Stacks created before version 1.18.0 might not have an associated environment(endpoint) identifier. Use this optional parameter to set the environment(endpoint) identifier used by the stack.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackUpdateGit(id, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 
 **body** | [**StacksStackGitUpdatePayload**](StacksStackGitUpdatePayload.md)| Git configs for pull and redeploy a stack | 
 **endpointId** | **Number**| Stacks created before version 1.18.0 might not have an associated environment(endpoint) identifier. Use this optional parameter to set the environment(endpoint) identifier used by the stack. | [optional] 

### Return type

[**PortainerStack**](PortainerStack.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookInvoke"></a>
# **webhookInvoke**
> webhookInvoke(webhookID)

Webhook for triggering stack updates from git

**Access policy**: public

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.StacksApi();

var webhookID = "webhookID_example"; // String | Stack identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webhookInvoke(webhookID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookID** | **String**| Stack identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

