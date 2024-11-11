# PortainerCeApi.PortainerLDAPSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anonymousMode** | **Boolean** | Enable this option if the server is configured for Anonymous access. When enabled, ReaderDN and Password will not be used | [optional] 
**autoCreateUsers** | **Boolean** | Automatically provision users and assign them to matching LDAP group names | [optional] 
**groupSearchSettings** | [**[PortainerLDAPGroupSearchSettings]**](PortainerLDAPGroupSearchSettings.md) |  | [optional] 
**password** | **String** | Password of the account that will be used to search users | [optional] 
**readerDN** | **String** | Account that will be used to search for users | [optional] 
**searchSettings** | [**[PortainerLDAPSearchSettings]**](PortainerLDAPSearchSettings.md) |  | [optional] 
**startTLS** | **Boolean** | Whether LDAP connection should use StartTLS | [optional] 
**tLSConfig** | [**PortainerTLSConfiguration**](PortainerTLSConfiguration.md) |  | [optional] 
**URL** | **String** | URL or IP address of the LDAP server | [optional] 


