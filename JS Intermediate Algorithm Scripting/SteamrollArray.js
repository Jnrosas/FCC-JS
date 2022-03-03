function steamrollArray(arr) {
    // Longer option =========================================
    
    let newArr = arr.join().split(",");
  
    for (let i=0; i<newArr.length; i++) {
      switch (newArr[i]) {
        case "[object Object]":
          newArr[i] = {};
          break;
        case "":
          newArr.splice(newArr.indexOf(newArr[i]), 1);
          break;
      };
      
      if (newArr[i] !== {} && /\d/g.test(newArr[i])) {
        newArr[i] = Number(newArr[i]);
      } else if (newArr[i] === {}) {
          newArr[i].replace(/"([^"]+(?="))"/g, '$1');
      };
    }  
    return newArr
    /*
    
  // Short option, using reduce + concat for several levels of nesting====
    
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? 
        steamrollArray(val) : val), []);
     */
  }
  console.log(steamrollArray([1, [], [3, [[4]]]]));
  