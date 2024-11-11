# PortainerCeApi.RegistriesRegistryUpdatePayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | **Boolean** | Is authentication against this registry enabled | 
**baseURL** | **String** | BaseURL is used for quay registry | [optional] 
**ecr** | [**PortainerEcrData**](PortainerEcrData.md) | ECR data | [optional] 
**name** | **String** | Name that will be used to identify this registry | 
**password** | **String** | Password used to authenticate against this registry. required when Authentication is true | [optional] 
**quay** | [**PortainerQuayRegistryData**](PortainerQuayRegistryData.md) | Quay data | [optional] 
**registryAccesses** | [**PortainerRegistryAccesses**](PortainerRegistryAccesses.md) | Registry access control | [optional] 
**url** | **String** | URL or IP address of the Docker registry | 
**username** | **String** | Username used to authenticate against this registry. Required when Authentication is true | [optional] 


