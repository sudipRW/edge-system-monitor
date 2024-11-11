# PortainerCeApi.EndpointsEndpointUpdatePayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azureApplicationID** | **String** | Azure application ID | [optional] 
**azureAuthenticationKey** | **String** | Azure authentication key | [optional] 
**azureTenantID** | **String** | Azure tenant ID | [optional] 
**edgeCheckinInterval** | **Number** | The check in interval for edge agent (in seconds) | [optional] 
**gpus** | [**[PortainerPair]**](PortainerPair.md) | GPUs information | [optional] 
**groupID** | **Number** | Group identifier | [optional] 
**kubernetes** | [**PortainerKubernetesData**](PortainerKubernetesData.md) | Associated Kubernetes data | [optional] 
**name** | **String** | Name that will be used to identify this environment(endpoint) | [optional] 
**publicURL** | **String** | URL or IP address where exposed containers will be reachable.\\ Defaults to URL if not specified | [optional] 
**status** | **Number** | The status of the environment(endpoint) (1 - up, 2 - down) | [optional] 
**tagIDs** | **[Number]** | List of tag identifiers to which this environment(endpoint) is associated | [optional] 
**teamAccessPolicies** | [**PortainerTeamAccessPolicies**](PortainerTeamAccessPolicies.md) |  | [optional] 
**tls** | **Boolean** | Require TLS to connect against this environment(endpoint) | [optional] 
**tlsskipClientVerify** | **Boolean** | Skip client verification when using TLS | [optional] 
**tlsskipVerify** | **Boolean** | Skip server verification when using TLS | [optional] 
**url** | **String** | URL or IP address of a Docker host | [optional] 
**userAccessPolicies** | [**PortainerUserAccessPolicies**](PortainerUserAccessPolicies.md) |  | [optional] 


