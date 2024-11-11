# PortainerCeApi.PortainerCustomTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdByUserId** | **Number** | User identifier who created this template | [optional] 
**description** | **String** | Description of the template | [optional] 
**entryPoint** | **String** | Path to the Stack file | [optional] 
**gitConfig** | [**GittypesRepoConfig**](GittypesRepoConfig.md) |  | [optional] 
**id** | **Number** | CustomTemplate Identifier | [optional] 
**logo** | **String** | URL of the template's logo | [optional] 
**note** | **String** | A note that will be displayed in the UI. Supports HTML content | [optional] 
**platform** | **Number** | Platform associated to the template. Valid values are: 1 - 'linux', 2 - 'windows' | [optional] 
**projectPath** | **String** | Path on disk to the repository hosting the Stack file | [optional] 
**resourceControl** | [**PortainerResourceControl**](PortainerResourceControl.md) |  | [optional] 
**title** | **String** | Title of the template | [optional] 
**type** | **Number** | Type of created stack: * 1 - swarm * 2 - compose * 3 - kubernetes | [optional] 
**edgeTemplate** | **Boolean** | EdgeTemplate indicates if this template purpose for Edge Stack | [optional] 
**isComposeFormat** | **Boolean** | IsComposeFormat indicates if the Kubernetes template is created from a Docker Compose file | [optional] 
**variables** | [**[PortainerCustomTemplateVariableDefinition]**](PortainerCustomTemplateVariableDefinition.md) |  | [optional] 


