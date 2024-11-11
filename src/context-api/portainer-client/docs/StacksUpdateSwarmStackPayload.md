# PortainerCeApi.StacksUpdateSwarmStackPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**env** | [**[PortainerPair]**](PortainerPair.md) | A list of environment(endpoint) variables used during stack deployment | [optional] 
**prune** | **Boolean** | Prune services that are no longer referenced (only available for Swarm stacks) | [optional] 
**pullImage** | **Boolean** | Force a pulling to current image with the original tag though the image is already the latest | [optional] 
**stackFileContent** | **String** | New content of the Stack file | [optional] 


