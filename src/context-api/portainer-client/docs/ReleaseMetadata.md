# PortainerCeApi.ReleaseMetadata

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **{String: String}** | Annotations are additional mappings uninterpreted by Helm, made available for inspection by other applications. | [optional] 
**apiVersion** | **String** | The API Version of this chart. Required. | [optional] 
**appVersion** | **String** | The version of the application enclosed inside of this chart. | [optional] 
**condition** | **String** | The condition to check to enable chart | [optional] 
**dependencies** | [**[ReleaseDependency]**](ReleaseDependency.md) | Dependencies are a list of dependencies for a chart. | [optional] 
**deprecated** | **Boolean** | Whether or not this chart is deprecated | [optional] 
**description** | **String** | A one-sentence description of the chart | [optional] 
**home** | **String** | The URL to a relevant project page, git repo, or contact person | [optional] 
**icon** | **String** | The URL to an icon file. | [optional] 
**keywords** | **[String]** | A list of string keywords | [optional] 
**kubeVersion** | **String** | KubeVersion is a SemVer constraint specifying the version of Kubernetes required. | [optional] 
**maintainers** | [**[ReleaseMaintainer]**](ReleaseMaintainer.md) | A list of name and URL/email address combinations for the maintainer(s) | [optional] 
**name** | **String** | The name of the chart. Required. | [optional] 
**sources** | **[String]** | Source is the URL to the source code of this chart | [optional] 
**tags** | **String** | The tags to check to enable chart | [optional] 
**type** | **String** | Specifies the chart type: application or library | [optional] 
**version** | **String** | A SemVer 2 conformant version string of the chart. Required. | [optional] 


