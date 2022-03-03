function getIndexToIns(arr, num) {
    if (arr.length === 0) {
      arr.push(num); 
      return arr.indexOf(num);
    } 
    arr.sort((a, b) => a - b);
    let mayor = false;
    
    for (let i=0; i<arr.length; i++) {
      
      if (i === 0 && num < arr[i]) {
        arr.unshift(num);
        return i;
      } 
      if (num === arr[i]) {
        arr.splice(i, 0, num);
        return i;
        //break;
      }
      if (num > arr[i] && i < arr.length - 1) {
        mayor = true;
        continue;
      } 
      if (mayor && num <= arr[i]) {
        arr.splice(i, 0, num);
        return i;
        //break;
      }
      if (mayor && i === arr.length - 1) {
        arr.push(num);
        return arr.length - 1;
      }
    }
    //return arr;
  }
  
  console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
