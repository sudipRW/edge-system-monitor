# PortainerCeApi.CustomtemplatesCustomTemplateFromFileContentPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description of the template | 
**edgeTemplate** | **Boolean** | EdgeTemplate indicates if this template purpose for Edge Stack | [optional] 
**fileContent** | **String** | Content of stack file | 
**logo** | **String** | URL of the template's logo | [optional] 
**note** | **String** | A note that will be displayed in the UI. Supports HTML content | [optional] 
**platform** | **Number** | Platform associated to the template. Valid values are: 1 - 'linux', 2 - 'windows' Required for Docker stacks | [optional] 
**title** | **String** | Title of the template | 
**type** | **Number** | Type of created stack: * 1 - swarm * 2 - compose * 3 - kubernetes | 
**variables** | [**[PortainerCustomTemplateVariableDefinition]**](PortainerCustomTemplateVariableDefinition.md) | Definitions of variables in the stack file | [optional] 


