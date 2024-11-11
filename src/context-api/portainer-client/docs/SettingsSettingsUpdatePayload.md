# PortainerCeApi.SettingsSettingsUpdatePayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edgePortainerURL** | **String** | EdgePortainerURL is the URL that is exposed to edge agents | [optional] 
**showKomposeBuildOption** | **Boolean** | Show the Kompose build option (discontinued in 2.18) | [optional] 
**authenticationMethod** | **Number** | Active authentication method for the Portainer instance. Valid values are: 1 for internal, 2 for LDAP, or 3 for oauth | [optional] 
**blackListedLabels** | [**[PortainerPair]**](PortainerPair.md) | A list of label name & value that will be used to hide containers when querying containers | [optional] 
**edgeAgentCheckinInterval** | **Number** |  | [optional] 
**enableEdgeComputeFeatures** | **Boolean** | Whether edge compute features are enabled | [optional] 
**enableTelemetry** | **Boolean** | Whether telemetry is enabled | [optional] 
**enforceEdgeID** | **Boolean** | EnforceEdgeID makes Portainer store the Edge ID instead of accepting anyone | [optional] 
**globalDeploymentOptions** | [**PortainerGlobalDeploymentOptions**](PortainerGlobalDeploymentOptions.md) | Deployment options for encouraging deployment as code | [optional] 
**helmRepositoryURL** | **String** | Helm repository URL | [optional] 
**internalAuthSettings** | [**PortainerInternalAuthSettings**](PortainerInternalAuthSettings.md) |  | [optional] 
**kubeconfigExpiry** | **String** | The expiry of a Kubeconfig | [optional] [default to '0']
**kubectlShellImage** | **String** | Kubectl Shell Image | [optional] 
**ldapsettings** | [**PortainerLDAPSettings**](PortainerLDAPSettings.md) |  | [optional] 
**logoURL** | **String** | URL to a logo that will be displayed on the login page as well as on top of the sidebar. Will use default Portainer logo when value is empty string | [optional] 
**oauthSettings** | [**PortainerOAuthSettings**](PortainerOAuthSettings.md) |  | [optional] 
**snapshotInterval** | **String** | The interval in which environment(endpoint) snapshots are created | [optional] 
**templatesURL** | **String** | URL to the templates that will be displayed in the UI when navigating to App Templates | [optional] 
**trustOnFirstConnect** | **Boolean** | TrustOnFirstConnect makes Portainer accepting edge agent connection by default | [optional] 
**userSessionTimeout** | **String** | The duration of a user session | [optional] 


