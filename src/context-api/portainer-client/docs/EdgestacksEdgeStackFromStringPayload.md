# PortainerCeApi.EdgestacksEdgeStackFromStringPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploymentType** | **Number** | Deployment type to deploy this stack Valid values are: 0 - 'compose', 1 - 'kubernetes' compose is enabled only for docker environments kubernetes is enabled only for kubernetes environments | [optional] 
**edgeGroups** | **[Number]** | List of identifiers of EdgeGroups | [optional] 
**name** | **String** | Name of the stack | 
**registries** | **[Number]** | List of Registries to use for this stack | [optional] 
**stackFileContent** | **String** | Content of the Stack file | 
**useManifestNamespaces** | **Boolean** | Uses the manifest's namespaces instead of the default one | [optional] 


