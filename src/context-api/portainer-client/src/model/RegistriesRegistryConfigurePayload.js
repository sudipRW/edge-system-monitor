/*
 * PortainerCE API
 * Portainer API is an HTTP API served by Portainer. It is used by the Portainer UI and everything you can do with the UI can be done using the HTTP API. Examples are available at https://documentation.portainer.io/api/api-examples/ You can find out more about Portainer at [http://portainer.io](http://portainer.io) and get some support on [Slack](http://portainer.io/slack/).  # Authentication  Most of the API environments(endpoints) require to be authenticated as well as some level of authorization to be used. Portainer API uses JSON Web Token to manage authentication and thus requires you to provide a token in the **Authorization** header of each request with the **Bearer** authentication mechanism.  Example:  ``` Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE ```  # Security  Each API environment(endpoint) has an associated access policy, it is documented in the description of each environment(endpoint).  Different access policies are available:  - Public access - Authenticated access - Restricted access - Administrator access  ### Public access  No authentication is required to access the environments(endpoints) with this access policy.  ### Authenticated access  Authentication is required to access the environments(endpoints) with this access policy.  ### Restricted access  Authentication is required to access the environments(endpoints) with this access policy. Extra-checks might be added to ensure access to the resource is granted. Returned data might also be filtered.  ### Administrator access  Authentication as well as an administrator role are required to access the environments(endpoints) with this access policy.  # Execute Docker requests  Portainer **DO NOT** expose specific environments(endpoints) to manage your Docker resources (create a container, remove a volume, etc...).  Instead, it acts as a reverse-proxy to the Docker HTTP API. This means that you can execute Docker requests **via** the Portainer HTTP API.  To do so, you can use the `/endpoints/{id}/docker` Portainer API environment(endpoint) (which is not documented below due to Swagger limitations). This environment(endpoint) has a restricted access policy so you still need to be authenticated to be able to query this environment(endpoint). Any query on this environment(endpoint) will be proxied to the Docker API of the associated environment(endpoint) (requests and responses objects are the same as documented in the Docker API).  # Private Registry  Using private registry, you will need to pass a based64 encoded JSON string ‘{\"registryId\":\\<registryID value\\>}’ inside the Request Header. The parameter name is \"X-Registry-Auth\". \\<registryID value\\> - The registry ID where the repository was created.  Example:  ``` eyJyZWdpc3RyeUlkIjoxfQ== ```  **NOTE**: You can find more information on how to query the Docker API in the [Docker official documentation](https://docs.docker.com/engine/api/v1.30/) as well as in [this Portainer example](https://documentation.portainer.io/api/api-examples/). 
 *
 * OpenAPI spec version: 2.21.3
 * Contact: info@portainer.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.RegistriesRegistryConfigurePayload = factory(root.PortainerCeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RegistriesRegistryConfigurePayload model module.
   * @module model/RegistriesRegistryConfigurePayload
   * @version 2.21.3
   */

  /**
   * Constructs a new <code>RegistriesRegistryConfigurePayload</code>.
   * @alias module:model/RegistriesRegistryConfigurePayload
   * @class
   * @param authentication {Boolean} Is authentication against this registry enabled
   */
  var exports = function(authentication) {
    this.authentication = authentication;
  };

  /**
   * Constructs a <code>RegistriesRegistryConfigurePayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RegistriesRegistryConfigurePayload} obj Optional instance to populate.
   * @return {module:model/RegistriesRegistryConfigurePayload} The populated <code>RegistriesRegistryConfigurePayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('authentication'))
        obj.authentication = ApiClient.convertToType(data['authentication'], 'Boolean');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('region'))
        obj.region = ApiClient.convertToType(data['region'], 'String');
      if (data.hasOwnProperty('tls'))
        obj.tls = ApiClient.convertToType(data['tls'], 'Boolean');
      if (data.hasOwnProperty('tlscacertFile'))
        obj.tlscacertFile = ApiClient.convertToType(data['tlscacertFile'], ['Number']);
      if (data.hasOwnProperty('tlscertFile'))
        obj.tlscertFile = ApiClient.convertToType(data['tlscertFile'], ['Number']);
      if (data.hasOwnProperty('tlskeyFile'))
        obj.tlskeyFile = ApiClient.convertToType(data['tlskeyFile'], ['Number']);
      if (data.hasOwnProperty('tlsskipVerify'))
        obj.tlsskipVerify = ApiClient.convertToType(data['tlsskipVerify'], 'Boolean');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
    }
    return obj;
  }

  /**
   * Is authentication against this registry enabled
   * @member {Boolean} authentication
   */
  exports.prototype.authentication = undefined;

  /**
   * Password used to authenticate against this registry. required when Authentication is true
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * ECR region
   * @member {String} region
   */
  exports.prototype.region = undefined;

  /**
   * Use TLS
   * @member {Boolean} tls
   */
  exports.prototype.tls = undefined;

  /**
   * The TLS CA certificate file
   * @member {Array.<Number>} tlscacertFile
   */
  exports.prototype.tlscacertFile = undefined;

  /**
   * The TLS client certificate file
   * @member {Array.<Number>} tlscertFile
   */
  exports.prototype.tlscertFile = undefined;

  /**
   * The TLS client key file
   * @member {Array.<Number>} tlskeyFile
   */
  exports.prototype.tlskeyFile = undefined;

  /**
   * Skip the verification of the server TLS certificate
   * @member {Boolean} tlsskipVerify
   */
  exports.prototype.tlsskipVerify = undefined;

  /**
   * Username used to authenticate against this registry. Required when Authentication is true
   * @member {String} username
   */
  exports.prototype.username = undefined;


  return exports;
}));
