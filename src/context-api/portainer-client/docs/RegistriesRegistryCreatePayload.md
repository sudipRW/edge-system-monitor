# PortainerCeApi.RegistriesRegistryCreatePayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | **Boolean** | Is authentication against this registry enabled | 
**baseURL** | **String** | BaseURL required for ProGet registry | [optional] 
**ecr** | [**PortainerEcrData**](PortainerEcrData.md) | ECR specific details, required when type = 7 | [optional] 
**gitlab** | [**PortainerGitlabRegistryData**](PortainerGitlabRegistryData.md) | Gitlab specific details, required when type = 4 | [optional] 
**name** | **String** | Name that will be used to identify this registry | 
**password** | **String** | Password used to authenticate against this registry. required when Authentication is true | [optional] 
**quay** | [**PortainerQuayRegistryData**](PortainerQuayRegistryData.md) | Quay specific details, required when type = 1 | [optional] 
**type** | **Number** | Registry Type. Valid values are:  1 (Quay.io),  2 (Azure container registry),  3 (custom registry),  4 (Gitlab registry),  5 (ProGet registry),  6 (DockerHub)  7 (ECR) | 
**url** | **String** | URL or IP address of the Docker registry | 
**username** | **String** | Username used to authenticate against this registry. Required when Authentication is true | [optional] 


