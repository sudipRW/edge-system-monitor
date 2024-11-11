# PortainerCeApi.KubernetesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createKubernetesIngress**](KubernetesApi.md#createKubernetesIngress) | **POST** /kubernetes/{id}/namespaces/{namespace}/ingresses | Create a kubernetes ingress by namespace
[**createKubernetesNamespace**](KubernetesApi.md#createKubernetesNamespace) | **POST** /kubernetes/{id}/namespaces | Create a kubernetes namespace
[**createKubernetesService**](KubernetesApi.md#createKubernetesService) | **POST** /kubernetes/{id}/namespaces/{namespace}/services | Create a kubernetes service
[**deleteKubernetesIngresses**](KubernetesApi.md#deleteKubernetesIngresses) | **POST** /kubernetes/{id}/ingresses/delete | Delete kubernetes ingresses
[**deleteKubernetesNamespace**](KubernetesApi.md#deleteKubernetesNamespace) | **DELETE** /kubernetes/{id}/namespaces/{namespace} | Delete kubernetes namespace
[**deleteKubernetesServices**](KubernetesApi.md#deleteKubernetesServices) | **POST** /kubernetes/{id}/services/delete | Delete kubernetes services
[**getKubernetesConfig**](KubernetesApi.md#getKubernetesConfig) | **GET** /kubernetes/config | Generate a kubeconfig file enabling client communication with k8s api server
[**getKubernetesConfigMapsAndSecrets**](KubernetesApi.md#getKubernetesConfigMapsAndSecrets) | **GET** /kubernetes/{id}/namespaces/{namespace}/configuration | Get ConfigMaps and Secrets
[**getKubernetesIngressControllers**](KubernetesApi.md#getKubernetesIngressControllers) | **GET** /kubernetes/{id}/ingresscontrollers | Get a list of ingress controllers
[**getKubernetesIngressControllersByNamespace**](KubernetesApi.md#getKubernetesIngressControllersByNamespace) | **GET** /kubernetes/{id}/namespaces/{namespace}/ingresscontrollers | Get a list ingress controllers by namespace
[**getKubernetesIngresses**](KubernetesApi.md#getKubernetesIngresses) | **GET** /kubernetes/{id}/namespaces/{namespace}/ingresses | Get kubernetes ingresses by namespace
[**getKubernetesMetricsForAllNodes**](KubernetesApi.md#getKubernetesMetricsForAllNodes) | **GET** /kubernetes/{id}/metrics/nodes | Get a list of nodes with their live metrics
[**getKubernetesMetricsForAllPods**](KubernetesApi.md#getKubernetesMetricsForAllPods) | **GET** /kubernetes/{id}/metrics/pods/{namespace} | Get a list of pods with their live metrics
[**getKubernetesMetricsForNode**](KubernetesApi.md#getKubernetesMetricsForNode) | **GET** /kubernetes/{id}/metrics/nodes/{name} | Get live metrics for a node
[**getKubernetesMetricsForPod**](KubernetesApi.md#getKubernetesMetricsForPod) | **GET** /kubernetes/{id}/metrics/pods/{namespace}/{name} | Get live metrics for a pod
[**getKubernetesNamespace**](KubernetesApi.md#getKubernetesNamespace) | **GET** /kubernetes/{id}/namespaces/{namespace} | Get kubernetes namespace details
[**getKubernetesNamespaces**](KubernetesApi.md#getKubernetesNamespaces) | **GET** /kubernetes/{id}/namespaces | Get a list of kubernetes namespaces
[**getKubernetesNodesLimits**](KubernetesApi.md#getKubernetesNodesLimits) | **GET** /kubernetes/{id}/nodes_limits | Get CPU and memory limits of all nodes within k8s cluster
[**getKubernetesServices**](KubernetesApi.md#getKubernetesServices) | **GET** /kubernetes/{id}/namespaces/{namespace}/services | Get a list of kubernetes services for a given namespace
[**kubernetesNamespacesToggleSystem**](KubernetesApi.md#kubernetesNamespacesToggleSystem) | **PUT** /kubernetes/{id}/namespaces/{namespace}/system | Toggle the system state for a namespace
[**updateKubernetesIngress**](KubernetesApi.md#updateKubernetesIngress) | **PUT** /kubernetes/{id}/namespaces/{namespace}/ingresses | Update kubernetes ingress rule
[**updateKubernetesIngressControllers**](KubernetesApi.md#updateKubernetesIngressControllers) | **PUT** /kubernetes/{id}/ingresscontrollers | Update (block/unblock) ingress controllers
[**updateKubernetesIngressControllersByNamespace**](KubernetesApi.md#updateKubernetesIngressControllersByNamespace) | **PUT** /kubernetes/{id}/namespaces/{namespace}/ingresscontrollers | Update (block/unblock) ingress controllers by namespace
[**updateKubernetesNamespace**](KubernetesApi.md#updateKubernetesNamespace) | **PUT** /kubernetes/{id}/namespaces/{namespace} | Updates a kubernetes namespace
[**updateKubernetesService**](KubernetesApi.md#updateKubernetesService) | **PUT** /kubernetes/{id}/namespaces/{namespace}/services | Update a kubernetes service


<a name="createKubernetesIngress"></a>
# **createKubernetesIngress**
> 'String' createKubernetesIngress(id, namespace, body)

Create a kubernetes ingress by namespace

Create a kubernetes ingress by namespace for the provided environment **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace name

var body = new PortainerCeApi.KubernetesK8sIngressInfo(); // KubernetesK8sIngressInfo | Ingress details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createKubernetesIngress(id, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace name | 
 **body** | [**KubernetesK8sIngressInfo**](KubernetesK8sIngressInfo.md)| Ingress details | 

### Return type

**'String'**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createKubernetesNamespace"></a>
# **createKubernetesNamespace**
> 'String' createKubernetesNamespace(id, body)

Create a kubernetes namespace

Create a kubernetes namespace within the given environment **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var body = new PortainerCeApi.KubernetesK8sNamespaceDetails(); // KubernetesK8sNamespaceDetails | Namespace configuration details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createKubernetesNamespace(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **body** | [**KubernetesK8sNamespaceDetails**](KubernetesK8sNamespaceDetails.md)| Namespace configuration details | 

### Return type

**'String'**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createKubernetesService"></a>
# **createKubernetesService**
> createKubernetesService(id, namespace, body)

Create a kubernetes service

Create a kubernetes service within a given namespace **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace name

var body = new PortainerCeApi.KubernetesK8sServiceInfo(); // KubernetesK8sServiceInfo | Service definition


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createKubernetesService(id, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace name | 
 **body** | [**KubernetesK8sServiceInfo**](KubernetesK8sServiceInfo.md)| Service definition | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteKubernetesIngresses"></a>
# **deleteKubernetesIngresses**
> 'String' deleteKubernetesIngresses(id, body)

Delete kubernetes ingresses

Delete kubernetes ingresses for the provided environment **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var body = new PortainerCeApi.KubernetesK8sIngressDeleteRequests(); // KubernetesK8sIngressDeleteRequests | Ingress details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteKubernetesIngresses(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **body** | [**KubernetesK8sIngressDeleteRequests**](KubernetesK8sIngressDeleteRequests.md)| Ingress details | 

### Return type

**'String'**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteKubernetesNamespace"></a>
# **deleteKubernetesNamespace**
> 'String' deleteKubernetesNamespace(id, namespace)

Delete kubernetes namespace

Delete a kubernetes namespace within the given environment **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteKubernetesNamespace(id, namespace, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace | 

### Return type

**'String'**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteKubernetesServices"></a>
# **deleteKubernetesServices**
> deleteKubernetesServices(id, body)

Delete kubernetes services

Delete the provided list of kubernetes services **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var body = new PortainerCeApi.KubernetesK8sServiceDeleteRequests(); // KubernetesK8sServiceDeleteRequests | A map where the key is the namespace and the value is an array of services to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteKubernetesServices(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **body** | [**KubernetesK8sServiceDeleteRequests**](KubernetesK8sServiceDeleteRequests.md)| A map where the key is the namespace and the value is an array of services to delete | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesConfig"></a>
# **getKubernetesConfig**
> getKubernetesConfig(opts)

Generate a kubeconfig file enabling client communication with k8s api server

Generate a kubeconfig file enabling client communication with k8s api server **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var opts = { 
  'ids': [3.4], // [Number] | will include only these environments(endpoints)
  'excludeIds': [3.4] // [Number] | will exclude these environments(endpoints)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getKubernetesConfig(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| will include only these environments(endpoints) | [optional] 
 **excludeIds** | [**[Number]**](Number.md)| will exclude these environments(endpoints) | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesConfigMapsAndSecrets"></a>
# **getKubernetesConfigMapsAndSecrets**
> [[KubernetesK8sConfigMapOrSecret]] getKubernetesConfigMapsAndSecrets(id, namespace)

Get ConfigMaps and Secrets

Get all ConfigMaps and Secrets for a given namespace **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesConfigMapsAndSecrets(id, namespace, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace name | 

### Return type

**[[KubernetesK8sConfigMapOrSecret]]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesIngressControllers"></a>
# **getKubernetesIngressControllers**
> [KubernetesK8sIngressController] getKubernetesIngressControllers(id, opts)

Get a list of ingress controllers

Get a list of ingress controllers for the given environment **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var opts = { 
  'allowedOnly': true // Boolean | Only return allowed ingress controllers
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesIngressControllers(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **allowedOnly** | **Boolean**| Only return allowed ingress controllers | [optional] 

### Return type

[**[KubernetesK8sIngressController]**](KubernetesK8sIngressController.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesIngressControllersByNamespace"></a>
# **getKubernetesIngressControllersByNamespace**
> [KubernetesK8sIngressController] getKubernetesIngressControllersByNamespace(id, namespace)

Get a list ingress controllers by namespace

Get a list of ingress controllers for the given environment in the provided namespace **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesIngressControllersByNamespace(id, namespace, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace | 

### Return type

[**[KubernetesK8sIngressController]**](KubernetesK8sIngressController.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesIngresses"></a>
# **getKubernetesIngresses**
> 'String' getKubernetesIngresses(id, namespace, body)

Get kubernetes ingresses by namespace

Get kubernetes ingresses by namespace for the provided environment **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace name

var body = [new PortainerCeApi.KubernetesK8sIngressInfo()]; // [KubernetesK8sIngressInfo] | Ingress details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesIngresses(id, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace name | 
 **body** | [**[KubernetesK8sIngressInfo]**](KubernetesK8sIngressInfo.md)| Ingress details | 

### Return type

**'String'**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesMetricsForAllNodes"></a>
# **getKubernetesMetricsForAllNodes**
> V1beta1NodeMetricsList getKubernetesMetricsForAllNodes(id)

Get a list of nodes with their live metrics

Get a list of nodes with their live metrics **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesMetricsForAllNodes(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 

### Return type

[**V1beta1NodeMetricsList**](V1beta1NodeMetricsList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesMetricsForAllPods"></a>
# **getKubernetesMetricsForAllPods**
> V1beta1PodMetricsList getKubernetesMetricsForAllPods(id, namespace)

Get a list of pods with their live metrics

Get a list of pods with their live metrics **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesMetricsForAllPods(id, namespace, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace | 

### Return type

[**V1beta1PodMetricsList**](V1beta1PodMetricsList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesMetricsForNode"></a>
# **getKubernetesMetricsForNode**
> V1beta1NodeMetrics getKubernetesMetricsForNode(id, name)

Get live metrics for a node

Get live metrics for a node **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var name = "name_example"; // String | Node identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesMetricsForNode(id, name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **name** | **String**| Node identifier | 

### Return type

[**V1beta1NodeMetrics**](V1beta1NodeMetrics.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesMetricsForPod"></a>
# **getKubernetesMetricsForPod**
> V1beta1PodMetrics getKubernetesMetricsForPod(id, namespace, name)

Get live metrics for a pod

Get live metrics for a pod **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace

var name = "name_example"; // String | Pod identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesMetricsForPod(id, namespace, name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace | 
 **name** | **String**| Pod identifier | 

### Return type

[**V1beta1PodMetrics**](V1beta1PodMetrics.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesNamespace"></a>
# **getKubernetesNamespace**
> PortainerK8sNamespaceInfo getKubernetesNamespace(id, namespace)

Get kubernetes namespace details

Get kubernetes namespace details for the provided namespace within the given environment **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesNamespace(id, namespace, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace | 

### Return type

[**PortainerK8sNamespaceInfo**](PortainerK8sNamespaceInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesNamespaces"></a>
# **getKubernetesNamespaces**
> {'String': PortainerK8sNamespaceInfo} getKubernetesNamespaces(id)

Get a list of kubernetes namespaces

Get a list of all kubernetes namespaces in the cluster **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesNamespaces(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 

### Return type

[**{'String': PortainerK8sNamespaceInfo}**](PortainerK8sNamespaceInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesNodesLimits"></a>
# **getKubernetesNodesLimits**
> PortainerK8sNodesLimits getKubernetesNodesLimits(id)

Get CPU and memory limits of all nodes within k8s cluster

Get CPU and memory limits of all nodes within k8s cluster **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment(Endpoint) identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesNodesLimits(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 

### Return type

[**PortainerK8sNodesLimits**](PortainerK8sNodesLimits.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKubernetesServices"></a>
# **getKubernetesServices**
> [KubernetesK8sServiceInfo] getKubernetesServices(id, namespace, opts)

Get a list of kubernetes services for a given namespace

Get a list of kubernetes services for a given namespace **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace name

var opts = { 
  'lookupapplications': true // Boolean | Lookup applications associated with each service
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKubernetesServices(id, namespace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace name | 
 **lookupapplications** | **Boolean**| Lookup applications associated with each service | [optional] 

### Return type

[**[KubernetesK8sServiceInfo]**](KubernetesK8sServiceInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="kubernetesNamespacesToggleSystem"></a>
# **kubernetesNamespacesToggleSystem**
> kubernetesNamespacesToggleSystem(id, namespace, body)

Toggle the system state for a namespace

Toggle the system state for a namespace **Access policy**: administrator or environment(endpoint) admin

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment(Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace name

var body = new PortainerCeApi.KubernetesNamespacesToggleSystemPayload(); // KubernetesNamespacesToggleSystemPayload | Update details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.kubernetesNamespacesToggleSystem(id, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 
 **namespace** | **String**| Namespace name | 
 **body** | [**KubernetesNamespacesToggleSystemPayload**](KubernetesNamespacesToggleSystemPayload.md)| Update details | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateKubernetesIngress"></a>
# **updateKubernetesIngress**
> 'String' updateKubernetesIngress(id, namespace, body)

Update kubernetes ingress rule

Update kubernetes ingress rule for the provided environment **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace name

var body = new PortainerCeApi.KubernetesK8sIngressInfo(); // KubernetesK8sIngressInfo | Ingress details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateKubernetesIngress(id, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace name | 
 **body** | [**KubernetesK8sIngressInfo**](KubernetesK8sIngressInfo.md)| Ingress details | 

### Return type

**'String'**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateKubernetesIngressControllers"></a>
# **updateKubernetesIngressControllers**
> 'String' updateKubernetesIngressControllers(id, body)

Update (block/unblock) ingress controllers

Update (block/unblock) ingress controllers **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var body = [new PortainerCeApi.[[KubernetesK8sIngressController]]()]; // [[KubernetesK8sIngressController]] | Ingress controllers


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateKubernetesIngressControllers(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **body** | **[[KubernetesK8sIngressController]]**| Ingress controllers | 

### Return type

**'String'**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateKubernetesIngressControllersByNamespace"></a>
# **updateKubernetesIngressControllersByNamespace**
> 'String' updateKubernetesIngressControllersByNamespace(id, namespace, body)

Update (block/unblock) ingress controllers by namespace

Update (block/unblock) ingress controllers by namespace for the provided environment **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace name

var body = [new PortainerCeApi.[[KubernetesK8sIngressController]]()]; // [[KubernetesK8sIngressController]] | Ingress controllers


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateKubernetesIngressControllersByNamespace(id, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace name | 
 **body** | **[[KubernetesK8sIngressController]]**| Ingress controllers | 

### Return type

**'String'**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateKubernetesNamespace"></a>
# **updateKubernetesNamespace**
> 'String' updateKubernetesNamespace(id, namespace, body)

Updates a kubernetes namespace

Update a kubernetes namespace within the given environment **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace

var body = new PortainerCeApi.KubernetesK8sNamespaceDetails(); // KubernetesK8sNamespaceDetails | Namespace details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateKubernetesNamespace(id, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace | 
 **body** | [**KubernetesK8sNamespaceDetails**](KubernetesK8sNamespaceDetails.md)| Namespace details | 

### Return type

**'String'**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateKubernetesService"></a>
# **updateKubernetesService**
> updateKubernetesService(id, namespace, body)

Update a kubernetes service

Update a kubernetes service within a given namespace **Access policy**: authenticated

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

var apiInstance = new PortainerCeApi.KubernetesApi();

var id = 56; // Number | Environment (Endpoint) identifier

var namespace = "namespace_example"; // String | Namespace name

var body = new PortainerCeApi.KubernetesK8sServiceInfo(); // KubernetesK8sServiceInfo | Service definition


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateKubernetesService(id, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment (Endpoint) identifier | 
 **namespace** | **String**| Namespace name | 
 **body** | [**KubernetesK8sServiceInfo**](KubernetesK8sServiceInfo.md)| Service definition | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

