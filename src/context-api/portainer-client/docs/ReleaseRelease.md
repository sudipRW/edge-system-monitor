# PortainerCeApi.ReleaseRelease

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart** | [**ReleaseChart**](ReleaseChart.md) | Info provides information about a release Info *Info `json:\"info,omitempty\"` Chart is the chart that was released. | [optional] 
**config** | [**{String: ModelObject}**](ModelObject.md) | Config is the set of extra Values added to the chart. These values override the default values inside of the chart. | [optional] 
**hooks** | [**[ReleaseHook]**](ReleaseHook.md) | Hooks are all of the hooks declared for this release. | [optional] 
**manifest** | **String** | Manifest is the string representation of the rendered template. | [optional] 
**name** | **String** | Name is the name of the release | [optional] 
**namespace** | **String** | Namespace is the kubernetes namespace of the release. | [optional] 
**version** | **Number** | Version is an int which represents the revision of the release. | [optional] 


