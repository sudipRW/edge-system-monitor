# PortainerCeApi.EdgestacksEdgeStackFromGitRepositoryPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploymentType** | **Number** | Deployment type to deploy this stack Valid values are: 0 - 'compose', 1 - 'kubernetes' compose is enabled only for docker environments kubernetes is enabled only for kubernetes environments | [optional] 
**edgeGroups** | **[Number]** | List of identifiers of EdgeGroups | 
**filePathInRepository** | **String** | Path to the Stack file inside the Git repository | [optional] [default to 'docker-compose.yml']
**name** | **String** | Name of the stack | 
**registries** | **[Number]** | List of Registries to use for this stack | [optional] 
**repositoryAuthentication** | **Boolean** | Use basic authentication to clone the Git repository | [optional] 
**repositoryPassword** | **String** | Password used in basic authentication. Required when RepositoryAuthentication is true. | [optional] 
**repositoryReferenceName** | **String** | Reference name of a Git repository hosting the Stack file | [optional] 
**repositoryURL** | **String** | URL of a Git repository hosting the Stack file | 
**repositoryUsername** | **String** | Username used in basic authentication. Required when RepositoryAuthentication is true. | [optional] 
**tlsskipVerify** | **Boolean** | TLSSkipVerify skips SSL verification when cloning the Git repository | [optional] 
**useManifestNamespaces** | **Boolean** | Uses the manifest's namespaces instead of the default one | [optional] 


