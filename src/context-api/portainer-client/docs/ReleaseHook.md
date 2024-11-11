# PortainerCeApi.ReleaseHook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deletePolicies** | **[String]** | DeletePolicies are the policies that indicate when to delete the hook | [optional] 
**events** | **[String]** | Events are the events that this hook fires on. | [optional] 
**kind** | **String** | Kind is the Kubernetes kind. | [optional] 
**lastRun** | [**ReleaseHookExecution**](ReleaseHookExecution.md) | LastRun indicates the date/time this was last run. | [optional] 
**manifest** | **String** | Manifest is the manifest contents. | [optional] 
**name** | **String** |  | [optional] 
**path** | **String** | Path is the chart-relative path to the template. | [optional] 
**weight** | **Number** | Weight indicates the sort order for execution among similar Hook type | [optional] 


