function diffArray(arr1, arr2) {
    let newArr = [];
    
    let newArr1 = arr1.filter(isThere1);
    function isThere1(item) {
      if (!arr2.includes(item)) {
        return item;
      }
    } 
    
    let newArr2 = arr2.filter(isThere2);
    function isThere2(item) {
      if (!arr1.includes(item)) {
        return item;
      }
    } 
    
    newArr = newArr1.concat(newArr2);
    return newArr;
  }
  
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  
  // Otro metodo con FOR==========================================
  
  /*function diffArray(arr1, arr2) {
    var newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (var i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  */
  
  // otro metodo con filter y concat =========================
  /*
  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  */