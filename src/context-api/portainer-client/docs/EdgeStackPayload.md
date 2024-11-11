# PortainerCeApi.EdgeStackPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dirEntries** | [**[FilesystemDirEntry]**](FilesystemDirEntry.md) | Content of stack folder | [optional] 
**edgeUpdateID** | **Number** | EdgeUpdateID is the ID of the edge update related to this stack. Used only for EE | [optional] 
**entryFileName** | **String** | Name of the stack entry file | [optional] 
**envVars** | [**[PortainerPair]**](PortainerPair.md) | Used only for EE EnvVars is a list of environment variables to inject into the stack | [optional] 
**filesystemPath** | **String** | Mount point for relative path | [optional] 
**id** | **Number** | ID of the stack | [optional] 
**name** | **String** | Name of the stack | [optional] 
**namespace** | **String** | Namespace to use for kubernetes stack. Keep empty to use the manifest namespace. | [optional] 
**prePullImage** | **Boolean** | PrePullImage is a flag indicating if the agent should pull the image before deploying the stack. Used only for EE | [optional] 
**rePullImage** | **Boolean** | RePullImage is a flag indicating if the agent should pull the image if it is already present on the node. Used only for EE | [optional] 
**readyRePullImage** | **Boolean** | Used only for EE async edge agent ReadyRePullImage is a flag to indicate whether the auto update is trigger to re-pull image | [optional] 
**registryCredentials** | [**[EdgeRegistryCredentials]**](EdgeRegistryCredentials.md) | RegistryCredentials holds the credentials for a Docker registry. Used only for EE | [optional] 
**retryDeploy** | **Boolean** | RetryDeploy is a flag indicating if the agent should retry to deploy the stack if it fails. Used only for EE | [optional] 
**rollbackTo** | **Number** | RollbackTo specifies the stack file version to rollback to (only support to rollback to the last version currently) | [optional] 
**stackFileContent** | **String** | Content of the stack file (for compatibility to agent version less than 2.19.0) | [optional] 
**supportRelativePath** | **Boolean** | Is relative path supported | [optional] 
**version** | **Number** | Version of the stack file | [optional] 


