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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PortainerCeApi);
  }
}(this, function(expect, PortainerCeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PortainerCeApi.EdgeGroupsApi();
  });

  describe('(package)', function() {
    describe('EdgeGroupsApi', function() {
      describe('edgeGroupCreate', function() {
        it('should call edgeGroupCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for edgeGroupCreate call and complete the assertions
          /*
          var body = new PortainerCeApi.EdgegroupsEdgeGroupCreatePayload();
          body.dynamic = false;
          body.endpoints = [0];
          body.name = "";
          body.partialMatch = false;
          body.tagIDs = [1];

          instance.edgeGroupCreate(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerEdgeGroup);
            expect(data.dynamic).to.be.a('boolean');
            expect(data.dynamic).to.be(false);
            {
              let dataCtr = data.endpoints;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.partialMatch).to.be.a('boolean');
            expect(data.partialMatch).to.be(false);
            {
              let dataCtr = data.tagIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('edgeGroupDelete', function() {
        it('should call edgeGroupDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for edgeGroupDelete call
          /*
          var id = 56;

          instance.edgeGroupDelete(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('edgeGroupInspect', function() {
        it('should call edgeGroupInspect successfully', function(done) {
          // TODO: uncomment, update parameter values for edgeGroupInspect call and complete the assertions
          /*
          var id = 56;

          instance.edgeGroupInspect(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerEdgeGroup);
            expect(data.dynamic).to.be.a('boolean');
            expect(data.dynamic).to.be(false);
            {
              let dataCtr = data.endpoints;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.partialMatch).to.be.a('boolean');
            expect(data.partialMatch).to.be(false);
            {
              let dataCtr = data.tagIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('edgeGroupList', function() {
        it('should call edgeGroupList successfully', function(done) {
          // TODO: uncomment edgeGroupList call and complete the assertions
          /*

          instance.edgeGroupList(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(PortainerCeApi.EdgegroupsDecoratedEdgeGroup);
              expect(data.dynamic).to.be.a('boolean');
              expect(data.dynamic).to.be(false);
              {
                let dataCtr = data.endpoints;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              expect(data.hasEdgeJob).to.be.a('boolean');
              expect(data.hasEdgeJob).to.be(false);
              expect(data.hasEdgeStack).to.be.a('boolean');
              expect(data.hasEdgeStack).to.be(false);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(1);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.partialMatch).to.be.a('boolean');
              expect(data.partialMatch).to.be(false);
              {
                let dataCtr = data.tagIds;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(1);
                }
              }
              {
                let dataCtr = data.trustedEndpoints;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              {
                let dataCtr = data.endpointTypes;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(1);
                }
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('egeGroupUpdate', function() {
        it('should call egeGroupUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for egeGroupUpdate call and complete the assertions
          /*
          var id = 56;
          var body = new PortainerCeApi.EdgegroupsEdgeGroupUpdatePayload();
          body.dynamic = false;
          body.endpoints = [0];
          body.name = "";
          body.partialMatch = false;
          body.tagIDs = [1];

          instance.egeGroupUpdate(id, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerEdgeGroup);
            expect(data.dynamic).to.be.a('boolean');
            expect(data.dynamic).to.be(false);
            {
              let dataCtr = data.endpoints;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.partialMatch).to.be.a('boolean');
            expect(data.partialMatch).to.be(false);
            {
              let dataCtr = data.tagIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
