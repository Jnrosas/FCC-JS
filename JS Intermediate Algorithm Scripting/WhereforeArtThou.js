function whatIsInAName(collection, source) {
    let arr = [];
    //Only change code below this line
    /*
    let keys = Object.keys(source);
    
    arr = collection.filter(function(obj) {
     
      for (let i=0; i<keys.length; i++) {
        if ( !obj.hasOwnProperty(keys[i]) || 
            obj[keys[i]] !== source[keys[i]] ) {
          return false;
        } 
      } 
      return true
    });
   */
    // Only change code above this line
    
    let arrKeys = Object.keys(source);
    return collection.filter(function(obj) {
      return arrKeys.every(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
    });
    
    return arr;
  }
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));