# PortainerCeApi.EdgeApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpointsIdEdgeJobsJobIDLogsPost**](EdgeApi.md#endpointsIdEdgeJobsJobIDLogsPost) | **POST** /endpoints/{id}/edge/jobs/{jobID}/logs | Inspect an EdgeJob Log
[**endpointsIdEdgeStacksStackIdGet**](EdgeApi.md#endpointsIdEdgeStacksStackIdGet) | **GET** /endpoints/{id}/edge/stacks/{stackId} | Inspect an Edge Stack for an Environment(Endpoint)


<a name="endpointsIdEdgeJobsJobIDLogsPost"></a>
# **endpointsIdEdgeJobsJobIDLogsPost**
> endpointsIdEdgeJobsJobIDLogsPost(id, jobID)

Inspect an EdgeJob Log

**Access policy**: public

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.EdgeApi();

var id = 56; // Number | environment(endpoint) Id

var jobID = 56; // Number | Job Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointsIdEdgeJobsJobIDLogsPost(id, jobID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| environment(endpoint) Id | 
 **jobID** | **Number**| Job Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointsIdEdgeStacksStackIdGet"></a>
# **endpointsIdEdgeStacksStackIdGet**
> EdgeStackPayload endpointsIdEdgeStacksStackIdGet(id, stackId)

Inspect an Edge Stack for an Environment(Endpoint)

**Access policy**: public

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');

var apiInstance = new PortainerCeApi.EdgeApi();

var id = 56; // Number | environment(endpoint) Id

var stackId = 56; // Number | EdgeStack Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointsIdEdgeStacksStackIdGet(id, stackId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| environment(endpoint) Id | 
 **stackId** | **Number**| EdgeStack Id | 

### Return type

[**EdgeStackPayload**](EdgeStackPayload.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

