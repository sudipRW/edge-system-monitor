# PortainerCeApi.PortainerTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administratorOnly** | **Boolean** | Whether the template should be available to administrators only | [optional] 
**categories** | **[String]** | A list of categories associated to the template | [optional] 
**command** | **String** | The command that will be executed in a container template | [optional] 
**description** | **String** | Description of the template | [optional] 
**env** | [**[PortainerTemplateEnv]**](PortainerTemplateEnv.md) | A list of environment(endpoint) variables used during the template deployment | [optional] 
**hostname** | **String** | Container hostname | [optional] 
**id** | **Number** | Mandatory container/stack fields Template Identifier | [optional] 
**image** | **String** | Mandatory container fields Image associated to a container template. Mandatory for a container template | [optional] 
**interactive** | **Boolean** | Whether the container should be started in interactive mode (-i -t equivalent on the CLI) | [optional] 
**labels** | [**[PortainerPair]**](PortainerPair.md) | Container labels | [optional] 
**logo** | **String** | URL of the template's logo | [optional] 
**name** | **String** | Optional stack/container fields Default name for the stack/container to be used on deployment | [optional] 
**network** | **String** | Name of a network that will be used on container deployment if it exists inside the environment(endpoint) | [optional] 
**note** | **String** | A note that will be displayed in the UI. Supports HTML content | [optional] 
**platform** | **String** | Platform associated to the template. Valid values are: 'linux', 'windows' or leave empty for multi-platform | [optional] 
**ports** | **[String]** | A list of ports exposed by the container | [optional] 
**privileged** | **Boolean** | Whether the container should be started in privileged mode | [optional] 
**registry** | **String** | Optional container fields The URL of a registry associated to the image for a container template | [optional] 
**repository** | [**PortainerTemplateRepository**](PortainerTemplateRepository.md) | Mandatory stack fields | [optional] 
**restartPolicy** | **String** | Container restart policy | [optional] 
**stackFile** | **String** | Mandatory Edge stack fields Stack file used for this template | [optional] 
**title** | **String** | Title of the template | [optional] 
**type** | **Number** | Template type. Valid values are: 1 (container), 2 (Swarm stack), 3 (Compose stack), 4 (Compose edge stack) | [optional] 
**volumes** | [**[PortainerTemplateVolume]**](PortainerTemplateVolume.md) | A list of volumes used during the container template deployment | [optional] 


