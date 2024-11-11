# PortainerCeApi.ReleaseChart

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**[ReleaseFile]**](ReleaseFile.md) | Files are miscellaneous files in a chart archive, e.g. README, LICENSE, etc. | [optional] 
**lock** | [**ReleaseLock**](ReleaseLock.md) | Lock is the contents of Chart.lock. | [optional] 
**metadata** | [**ReleaseMetadata**](ReleaseMetadata.md) | Metadata is the contents of the Chartfile. | [optional] 
**schema** | **[Number]** | Schema is an optional JSON schema for imposing structure on Values | [optional] 
**templates** | [**[ReleaseFile]**](ReleaseFile.md) | Templates for this chart. | [optional] 
**values** | [**{String: ModelObject}**](ModelObject.md) | Values are default config for this chart. | [optional] 


