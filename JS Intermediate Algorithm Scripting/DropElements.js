function dropElements(arr, func) {
    /* Option using if-else =============================================
    let res = [];
    if (arr.findIndex(func) === -1) {
      res = arr.slice(arr.length);
    } else {
      res = arr.slice(arr.findIndex(func));
    }
    return res */
    
    // Short ternary option =============================================
    return arr.findIndex(func) === -1
    ? arr.slice(arr.length)
    : arr.slice(arr.findIndex(func))
  }
  
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));