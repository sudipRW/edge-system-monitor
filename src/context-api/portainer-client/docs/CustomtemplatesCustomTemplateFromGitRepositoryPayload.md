# PortainerCeApi.CustomtemplatesCustomTemplateFromGitRepositoryPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**composeFilePathInRepository** | **String** | Path to the Stack file inside the Git repository | [optional] [default to 'docker-compose.yml']
**description** | **String** | Description of the template | 
**edgeTemplate** | **Boolean** | EdgeTemplate indicates if this template purpose for Edge Stack | [optional] 
**isComposeFormat** | **Boolean** | IsComposeFormat indicates if the Kubernetes template is created from a Docker Compose file | [optional] 
**logo** | **String** | URL of the template's logo | [optional] 
**note** | **String** | A note that will be displayed in the UI. Supports HTML content | [optional] 
**platform** | **Number** | Platform associated to the template. Valid values are: 1 - 'linux', 2 - 'windows' Required for Docker stacks | [optional] 
**repositoryAuthentication** | **Boolean** | Use basic authentication to clone the Git repository | [optional] 
**repositoryPassword** | **String** | Password used in basic authentication. Required when RepositoryAuthentication is true. | [optional] 
**repositoryReferenceName** | **String** | Reference name of a Git repository hosting the Stack file | [optional] 
**repositoryURL** | **String** | URL of a Git repository hosting the Stack file | 
**repositoryUsername** | **String** | Username used in basic authentication. Required when RepositoryAuthentication is true. | [optional] 
**title** | **String** | Title of the template | 
**tlsskipVerify** | **Boolean** | TLSSkipVerify skips SSL verification when cloning the Git repository | [optional] 
**type** | **Number** | Type of created stack: * 1 - swarm * 2 - compose * 3 - kubernetes | 
**variables** | [**[PortainerCustomTemplateVariableDefinition]**](PortainerCustomTemplateVariableDefinition.md) | Definitions of variables in the stack file | [optional] 


