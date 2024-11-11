# PortainerCeApi.IntelApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProfile**](IntelApi.md#createProfile) | **POST** /fdo/profiles | creates a new FDO Profile
[**deleteProfile**](IntelApi.md#deleteProfile) | **DELETE** /fdo/profiles/{id} | deletes a FDO Profile
[**deviceAction**](IntelApi.md#deviceAction) | **POST** /open_amt/{id}/devices/{deviceId}/action | Execute out of band action on an AMT managed device
[**deviceFeatures**](IntelApi.md#deviceFeatures) | **POST** /open_amt/{id}/devices_features/{deviceId} | Enable features on an AMT managed device
[**duplicate**](IntelApi.md#duplicate) | **POST** /fdo/profiles/{id}/duplicate | duplicated an existing FDO Profile
[**fdoConfigure**](IntelApi.md#fdoConfigure) | **POST** /fdo | Enable Portainer's FDO capabilities
[**fdoConfigureDevice**](IntelApi.md#fdoConfigureDevice) | **POST** /fdo/configure/{guid} | configures an FDO device
[**fdoListAll**](IntelApi.md#fdoListAll) | **GET** /fdo/list | List all known FDO vouchers
[**fdoProfileInspect**](IntelApi.md#fdoProfileInspect) | **GET** /fdo/profiles/{id} | retrieves a given FDO profile information and content
[**fdoProfileList**](IntelApi.md#fdoProfileList) | **GET** /fdo/profiles | retrieves all FDO profiles
[**fdoRegisterDevice**](IntelApi.md#fdoRegisterDevice) | **POST** /fdo/register | register an FDO device
[**openAMTActivate**](IntelApi.md#openAMTActivate) | **POST** /open_amt/{id}/activate | Activate OpenAMT device and associate to agent endpoint
[**openAMTConfigure**](IntelApi.md#openAMTConfigure) | **POST** /open_amt | Enable Portainer's OpenAMT capabilities
[**openAMTDevices**](IntelApi.md#openAMTDevices) | **GET** /open_amt/{id}/devices | Fetch OpenAMT managed devices information for endpoint
[**openAMTHostInfo**](IntelApi.md#openAMTHostInfo) | **GET** /open_amt/{id}/info | Request OpenAMT info from a node
[**updateProfile**](IntelApi.md#updateProfile) | **PUT** /fdo/profiles/{id} | updates an existing FDO Profile


<a name="createProfile"></a>
# **createProfile**
> createProfile()

creates a new FDO Profile

creates a new FDO Profile **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createProfile(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProfile"></a>
# **deleteProfile**
> deleteProfile(id)

deletes a FDO Profile

deletes a FDO Profile **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var id = 56; // Number | FDO Profile identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProfile(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| FDO Profile identifier | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deviceAction"></a>
# **deviceAction**
> deviceAction(id, deviceId, body)

Execute out of band action on an AMT managed device

Execute out of band action on an AMT managed device **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var id = 56; // Number | Environment identifier

var deviceId = 56; // Number | Device identifier

var body = new PortainerCeApi.OpenamtDeviceActionPayload(); // OpenamtDeviceActionPayload | Device Action


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deviceAction(id, deviceId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment identifier | 
 **deviceId** | **Number**| Device identifier | 
 **body** | [**OpenamtDeviceActionPayload**](OpenamtDeviceActionPayload.md)| Device Action | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deviceFeatures"></a>
# **deviceFeatures**
> deviceFeatures(id, deviceId, body)

Enable features on an AMT managed device

Enable features on an AMT managed device **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var id = 56; // Number | Environment identifier

var deviceId = 56; // Number | Device identifier

var body = new PortainerCeApi.OpenamtDeviceFeaturesPayload(); // OpenamtDeviceFeaturesPayload | Device Features


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deviceFeatures(id, deviceId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment identifier | 
 **deviceId** | **Number**| Device identifier | 
 **body** | [**OpenamtDeviceFeaturesPayload**](OpenamtDeviceFeaturesPayload.md)| Device Features | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="duplicate"></a>
# **duplicate**
> duplicate(id)

duplicated an existing FDO Profile

duplicated an existing FDO Profile **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var id = 56; // Number | FDO Profile identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.duplicate(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| FDO Profile identifier | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fdoConfigure"></a>
# **fdoConfigure**
> fdoConfigure(body)

Enable Portainer's FDO capabilities

Enable Portainer's FDO capabilities **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var body = new PortainerCeApi.FdoFdoConfigurePayload(); // FdoFdoConfigurePayload | FDO Settings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.fdoConfigure(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FdoFdoConfigurePayload**](FdoFdoConfigurePayload.md)| FDO Settings | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fdoConfigureDevice"></a>
# **fdoConfigureDevice**
> fdoConfigureDevice(guid, body)

configures an FDO device

configures an FDO device **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var guid = 56; // Number | Guid

var body = new PortainerCeApi.FdoDeviceConfigurePayload(); // FdoDeviceConfigurePayload | Device Configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.fdoConfigureDevice(guid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **Number**| Guid | 
 **body** | [**FdoDeviceConfigurePayload**](FdoDeviceConfigurePayload.md)| Device Configuration | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fdoListAll"></a>
# **fdoListAll**
> fdoListAll()

List all known FDO vouchers

List all known FDO vouchers **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.fdoListAll(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fdoProfileInspect"></a>
# **fdoProfileInspect**
> fdoProfileInspect(id)

retrieves a given FDO profile information and content

retrieves a given FDO profile information and content **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var id = 56; // Number | FDO Profile identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.fdoProfileInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| FDO Profile identifier | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fdoProfileList"></a>
# **fdoProfileList**
> fdoProfileList()

retrieves all FDO profiles

retrieves all FDO profiles **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.fdoProfileList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fdoRegisterDevice"></a>
# **fdoRegisterDevice**
> fdoRegisterDevice()

register an FDO device

register an FDO device **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.fdoRegisterDevice(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openAMTActivate"></a>
# **openAMTActivate**
> openAMTActivate(id)

Activate OpenAMT device and associate to agent endpoint

Activate OpenAMT device and associate to agent endpoint **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var id = 56; // Number | Environment identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.openAMTActivate(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment identifier | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openAMTConfigure"></a>
# **openAMTConfigure**
> openAMTConfigure(body)

Enable Portainer's OpenAMT capabilities

Enable Portainer's OpenAMT capabilities **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var body = new PortainerCeApi.OpenamtOpenAMTConfigurePayload(); // OpenamtOpenAMTConfigurePayload | OpenAMT Settings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.openAMTConfigure(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OpenamtOpenAMTConfigurePayload**](OpenamtOpenAMTConfigurePayload.md)| OpenAMT Settings | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="openAMTDevices"></a>
# **openAMTDevices**
> openAMTDevices(id)

Fetch OpenAMT managed devices information for endpoint

Fetch OpenAMT managed devices information for endpoint **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var id = 56; // Number | Environment(Endpoint) identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.openAMTDevices(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment(Endpoint) identifier | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openAMTHostInfo"></a>
# **openAMTHostInfo**
> openAMTHostInfo(id)

Request OpenAMT info from a node

Request OpenAMT info from a node **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var id = 56; // Number | Environment identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.openAMTHostInfo(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Environment identifier | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProfile"></a>
# **updateProfile**
> updateProfile(id)

updates an existing FDO Profile

updates an existing FDO Profile **Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.IntelApi();

var id = 56; // Number | FDO Profile identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProfile(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| FDO Profile identifier | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

