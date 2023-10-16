function Telegraph(limit) {
  this.limits = Number.isInteger(limit)
                            ? limit : 10
  this.call = function(
      method, atributes, path = ""
  ) {
    if (method) {
    } else {
      Bot.sendMessage(
        "This function NEEDS to have "+
        "at least one method to works. "+
        "See graph.org/api"
      )
    }
  }
  this.create = function() {}
  this.hardCreate = function() {}
  // Hard create: Store an already 
  /) created account by its token
  this.list = function() {}

  this.domToNode = function(
      domNode
  ){
    if (domNode.nodeType == 
         domNode.TEXT_NODE) {
      return domNode.data
    }
    if (domNode.nodeType !=
         domNode.ELEMENT_NODE) {
      return false
    }
    var nodeElement = {}
    nodeElement.tag = domNode
        .tagName.toLowerCase()
        
    for (
      var i = 0;
      i < domNode
          .attributes.length; 
      i++ ) {
      var attr = domNode.attributes[i]
      if (
        attr.name == "href" ||
        attr.name == "src"
      ) {
        if (!nodeElement.attrs) {
          nodeElement.attrs = {}
        }
        nodeElement.attrs[attr.name] =
        attr.value
      }
    }
    if (domNode
         .childNodes.length > 0
     ) {
      nodeElement.children = []
      for (
            var i = 0;
            i < domNode
                .childNodes.length; 
      i++) {
        var child = domNode
                            .childNodes[i]
        nodeElement.children
            .push(domToNode(child))
      }
    }
    return nodeElement
  }
}

//// Remember: If you call the API with the 
// Telegraph.call method, in order to create
// an account, you will NOT have the token 
// registration when the processes turns off, 
// even successfully.
//// To create an account and store the token 
// and other data, you really want to use the 
// .create method instead.


publish({
  callApi: Telegraph.call,
  createAccount: Telegraph.create,
  hardCreate: Telegraph.hardCreate,
  userList: Telegraph.list,
  domConverter: Telegraph.domToNode
})
