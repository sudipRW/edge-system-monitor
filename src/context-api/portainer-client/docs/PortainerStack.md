# PortainerCeApi.PortainerStack

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalFiles** | **[String]** | Only applies when deploying stack with multiple files | [optional] 
**autoUpdate** | [**PortainerAutoUpdateSettings**](PortainerAutoUpdateSettings.md) | The GitOps update settings of a git stack | [optional] 
**endpointId** | **Number** | Environment(Endpoint) identifier. Reference the environment(endpoint) that will be used for deployment | [optional] 
**entryPoint** | **String** | Path to the Stack file | [optional] 
**env** | [**[PortainerPair]**](PortainerPair.md) | A list of environment(endpoint) variables used during stack deployment | [optional] 
**id** | **Number** | Stack Identifier | [optional] 
**name** | **String** | Stack name | [optional] 
**option** | [**PortainerStackOption**](PortainerStackOption.md) | The stack deployment option | [optional] 
**resourceControl** | [**PortainerResourceControl**](PortainerResourceControl.md) |  | [optional] 
**status** | **Number** | Stack status (1 - active, 2 - inactive) | [optional] 
**swarmId** | **String** | Cluster identifier of the Swarm cluster where the stack is deployed | [optional] 
**type** | **Number** | Stack type. 1 for a Swarm stack, 2 for a Compose stack | [optional] 
**createdBy** | **String** | The username which created this stack | [optional] 
**creationDate** | **Number** | The date in unix time when stack was created | [optional] 
**fromAppTemplate** | **Boolean** | Whether the stack is from a app template | [optional] 
**gitConfig** | [**GittypesRepoConfig**](GittypesRepoConfig.md) | The git config of this stack | [optional] 
**isComposeFormat** | **Boolean** | IsComposeFormat indicates if the Kubernetes stack is created from a Docker Compose file | [optional] 
**namespace** | **String** | Kubernetes namespace if stack is a kube application | [optional] 
**projectPath** | **String** | Path on disk to the repository hosting the Stack file | [optional] 
**updateDate** | **Number** | The date in unix time when stack was last updated | [optional] 
**updatedBy** | **String** | The username which last updated this stack | [optional] 


