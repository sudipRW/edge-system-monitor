# PortainerCeApi.SettingsPublicSettingsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticationMethod** | **Number** | Active authentication method for the Portainer instance. Valid values are: 1 for internal, 2 for LDAP, or 3 for oauth | [optional] 
**enableEdgeComputeFeatures** | **Boolean** | Whether edge compute features are enabled | [optional] 
**enableTelemetry** | **Boolean** | Whether telemetry is enabled | [optional] 
**features** | **{String: Boolean}** | Supported feature flags | [optional] 
**globalDeploymentOptions** | [**PortainerGlobalDeploymentOptions**](PortainerGlobalDeploymentOptions.md) | Deployment options for encouraging deployment as code | [optional] 
**isDockerDesktopExtension** | **Boolean** |  | [optional] 
**logoURL** | **String** | URL to a logo that will be displayed on the login page as well as on top of the sidebar. Will use default Portainer logo when value is empty string | [optional] 
**oAuthLoginURI** | **String** | The URL used for oauth login | [optional] 
**oAuthLogoutURI** | **String** | The URL used for oauth logout | [optional] 
**requiredPasswordLength** | **Number** | The minimum required length for a password of any user when using internal auth mode | [optional] 
**showKomposeBuildOption** | **Boolean** | Show the Kompose build option (discontinued in 2.18) | [optional] 
**teamSync** | **Boolean** | Whether team sync is enabled | [optional] 
**edge** | [**SettingsPublicSettingsResponseEdge**](SettingsPublicSettingsResponseEdge.md) |  | [optional] 
**isAMTEnabled** | **Boolean** | Whether AMT is enabled | [optional] 
**isFDOEnabled** | **Boolean** | Whether FDO is enabled | [optional] 
**kubeconfigExpiry** | **String** | The expiry of a Kubeconfig | [optional] [default to '0']


