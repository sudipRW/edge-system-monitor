# PortainerCeApi.PortainerResourceControl

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessLevel** | **Number** |  | [optional] 
**administratorsOnly** | **Boolean** | Permit access to resource only to admins | [optional] 
**id** | **Number** | ResourceControl Identifier | [optional] 
**ownerId** | **Number** | Deprecated fields Deprecated in DBVersion == 2 | [optional] 
**_public** | **Boolean** | Permit access to the associated resource to any user | [optional] 
**resourceId** | **String** | Docker resource identifier on which access control will be applied.\\ In the case of a resource control applied to a stack, use the stack name as identifier | [optional] 
**subResourceIds** | **[String]** | List of Docker resources that will inherit this access control | [optional] 
**system** | **Boolean** |  | [optional] 
**teamAccesses** | [**[PortainerTeamResourceAccess]**](PortainerTeamResourceAccess.md) |  | [optional] 
**type** | **Number** | Type of Docker resource. Valid values are: 1- container, 2 -service 3 - volume, 4 - secret, 5 - stack, 6 - config or 7 - custom template | [optional] 
**userAccesses** | [**[PortainerUserResourceAccess]**](PortainerUserResourceAccess.md) |  | [optional] 


