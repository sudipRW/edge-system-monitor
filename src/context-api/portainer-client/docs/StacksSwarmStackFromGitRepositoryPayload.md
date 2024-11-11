# PortainerCeApi.StacksSwarmStackFromGitRepositoryPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalFiles** | **[String]** | Applicable when deploying with multiple stack files | [optional] 
**autoUpdate** | [**PortainerAutoUpdateSettings**](PortainerAutoUpdateSettings.md) | Optional GitOps update configuration | [optional] 
**composeFile** | **String** | Path to the Stack file inside the Git repository | [optional] [default to 'docker-compose.yml']
**env** | [**[PortainerPair]**](PortainerPair.md) | A list of environment variables used during stack deployment | [optional] 
**fromAppTemplate** | **Boolean** | Whether the stack is from a app template | [optional] 
**name** | **String** | Name of the stack | 
**repositoryAuthentication** | **Boolean** | Use basic authentication to clone the Git repository | [optional] 
**repositoryPassword** | **String** | Password used in basic authentication. Required when RepositoryAuthentication is true. | [optional] 
**repositoryReferenceName** | **String** | Reference name of a Git repository hosting the Stack file | [optional] 
**repositoryURL** | **String** | URL of a Git repository hosting the Stack file | 
**repositoryUsername** | **String** | Username used in basic authentication. Required when RepositoryAuthentication is true. | [optional] 
**swarmID** | **String** | Swarm cluster identifier | 
**tlsskipVerify** | **Boolean** | TLSSkipVerify skips SSL verification when cloning the Git repository | [optional] 


