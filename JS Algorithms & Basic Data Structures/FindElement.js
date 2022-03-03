function findElement(arr, func) {
    let num = 0;
    for (let i=0; i<arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      } 
    }
    return;
  }
  
  console.log(findElement([1, 3, 4, 9], num => num % 2 === 0));