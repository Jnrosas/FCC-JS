function destroyer(arr, ...args) {
    return arr.filter(item => !args.includes(item));
  }
  
  console.log(destroyer([2, 3, 2, 3], 2, 3));
  
  /*
  let result = arr.filter(notRepeat);
    
    function notRepeat(item) {
      if (!args.includes(item)) {
        return item;
      }
    }
    return result
  */