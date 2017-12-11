/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var CatalogObject = require('./CatalogObject');
var Error = require('./Error');




/**
 * The SearchCatalogObjectsResponse model module.
 * @module model/SearchCatalogObjectsResponse
 * @version 2.5.1
 */

/**
 * Constructs a new <code>SearchCatalogObjectsResponse</code>.
 * 
 * @alias module:model/SearchCatalogObjectsResponse
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>SearchCatalogObjectsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchCatalogObjectsResponse} obj Optional instance to populate.
 * @return {module:model/SearchCatalogObjectsResponse} The populated <code>SearchCatalogObjectsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('objects')) {
      obj['objects'] = ApiClient.convertToType(data['objects'], [CatalogObject]);
    }
      if (data.hasOwnProperty('related_objects')) {
      obj['related_objects'] = ApiClient.convertToType(data['related_objects'], [CatalogObject]);
    }
    }
  return obj;
}

/**
 * The set of [Error](#type-error)s encountered.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The pagination cursor to be used in a subsequent request. If unset, this is the final response. See [Paginating results](#paginatingresults) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * The [CatalogObject](#type-catalogobject)s returned.
 * @member {Array.<module:model/CatalogObject>} objects
 */
exports.prototype['objects'] = undefined;
/**
 * A list of [CatalogObject](#type-catalogobject)s referenced by the objects in the `objects` field.
 * @member {Array.<module:model/CatalogObject>} related_objects
 */
exports.prototype['related_objects'] = undefined;



module.exports = exports;


