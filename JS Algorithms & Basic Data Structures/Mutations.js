function mutation(arr) {
  
    let str0 = arr[0].toLowerCase();
    let str1 = arr[1].toLowerCase();
      
    for (let i=0; i < str1.length; i++) {
      if (str0.indexOf(str1[i]) < 0) {
        return false;
      } 
    
    } 
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));