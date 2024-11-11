# PortainerCeApi.RegistriesRegistryConfigurePayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | **Boolean** | Is authentication against this registry enabled | 
**password** | **String** | Password used to authenticate against this registry. required when Authentication is true | [optional] 
**region** | **String** | ECR region | [optional] 
**tls** | **Boolean** | Use TLS | [optional] 
**tlscacertFile** | **[Number]** | The TLS CA certificate file | [optional] 
**tlscertFile** | **[Number]** | The TLS client certificate file | [optional] 
**tlskeyFile** | **[Number]** | The TLS client key file | [optional] 
**tlsskipVerify** | **Boolean** | Skip the verification of the server TLS certificate | [optional] 
**username** | **String** | Username used to authenticate against this registry. Required when Authentication is true | [optional] 


