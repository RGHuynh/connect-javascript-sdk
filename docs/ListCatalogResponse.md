# SquareConnect.ListCatalogResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | The set of [Error](#type-error)s encountered. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent request. If unset, this is the final response. See [Paginating results](#paginatingresults) for more information. | [optional] 
**objects** | [**[CatalogObject]**](CatalogObject.md) | The [CatalogObject](#type-catalogobject)s returned. | [optional] 


