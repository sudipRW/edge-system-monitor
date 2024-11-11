# PortainerCeApi.ResourcecontrolsResourceControlCreatePayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administratorsOnly** | **Boolean** | Permit access to resource only to admins | [optional] 
**_public** | **Boolean** | Permit access to the associated resource to any user | [optional] 
**resourceID** | **String** |  | 
**subResourceIDs** | **[String]** | List of Docker resources that will inherit this access control | [optional] 
**teams** | **[Number]** | List of team identifiers with access to the associated resource | [optional] 
**type** | **Number** | Type of Resource. Valid values are: 1 - container, 2 - service 3 - volume, 4 - network, 5 - secret, 6 - stack, 7 - config, 8 - custom template, 9 - azure-container-group | 
**users** | **[Number]** | List of user identifiers with access to the associated resource | [optional] 


