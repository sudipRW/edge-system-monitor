# PortainerCeApi.ReleaseDependency

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **String** | Alias usable alias to be used for the chart | [optional] 
**condition** | **String** | A yaml path that resolves to a boolean, used for enabling/disabling charts (e.g. subchart1.enabled ) | [optional] 
**enabled** | **Boolean** | Enabled bool determines if chart should be loaded | [optional] 
**importValues** | **[Object]** | ImportValues holds the mapping of source values to parent key to be imported. Each item can be a string or pair of child/parent sublist items. | [optional] 
**name** | **String** | Name is the name of the dependency.  This must mach the name in the dependency's Chart.yaml. | [optional] 
**repository** | **String** | The URL to the repository.  Appending `index.yaml` to this string should result in a URL that can be used to fetch the repository index. | [optional] 
**tags** | **[String]** | Tags can be used to group charts for enabling/disabling together | [optional] 
**version** | **String** | Version is the version (range) of this chart.  A lock file will always produce a single version, while a dependency may contain a semantic version range. | [optional] 


