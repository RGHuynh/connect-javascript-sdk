# SquareConnect.BatchRetrieveInventoryChangesResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**changes** | [**[InventoryChange]**](InventoryChange.md) | The current calculated inventory changes for the requested objects and locations. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent request. If unset, this is the final response. See [Paginating results](#paginatingresults) for more information. | [optional] 


