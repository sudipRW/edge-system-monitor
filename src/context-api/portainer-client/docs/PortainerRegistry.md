# PortainerCeApi.PortainerRegistry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **String** | Stores temporary access token | [optional] 
**accessTokenExpiry** | **Number** |  | [optional] 
**authentication** | **Boolean** | Is authentication against this registry enabled | [optional] 
**authorizedTeams** | **[Number]** | Deprecated in DBVersion == 18 | [optional] 
**authorizedUsers** | **[Number]** | Deprecated in DBVersion == 18 | [optional] 
**baseURL** | **String** | Base URL, introduced for ProGet registry | [optional] 
**ecr** | [**PortainerEcrData**](PortainerEcrData.md) |  | [optional] 
**gitlab** | [**PortainerGitlabRegistryData**](PortainerGitlabRegistryData.md) |  | [optional] 
**id** | **Number** | Registry Identifier | [optional] 
**managementConfiguration** | [**PortainerRegistryManagementConfiguration**](PortainerRegistryManagementConfiguration.md) |  | [optional] 
**name** | **String** | Registry Name | [optional] 
**password** | **String** | Password or SecretAccessKey used to authenticate against this registry | [optional] 
**quay** | [**PortainerQuayRegistryData**](PortainerQuayRegistryData.md) |  | [optional] 
**registryAccesses** | [**PortainerRegistryAccesses**](PortainerRegistryAccesses.md) |  | [optional] 
**teamAccessPolicies** | [**PortainerTeamAccessPolicies**](PortainerTeamAccessPolicies.md) | Deprecated in DBVersion == 31 | [optional] 
**type** | **Number** | Registry Type (1 - Quay, 2 - Azure, 3 - Custom, 4 - Gitlab, 5 - ProGet, 6 - DockerHub, 7 - ECR) | [optional] 
**URL** | **String** | URL or IP address of the Docker registry | [optional] 
**userAccessPolicies** | [**PortainerUserAccessPolicies**](PortainerUserAccessPolicies.md) | Deprecated fields Deprecated in DBVersion == 31 | [optional] 
**username** | **String** | Username or AccessKeyID used to authenticate against this registry | [optional] 


