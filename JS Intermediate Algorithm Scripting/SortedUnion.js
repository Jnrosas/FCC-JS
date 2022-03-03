function uniteUnique(...arr) {
    let uniqueArr = [];
    for (let i=0; i<arr.length; i++) {
      for (let j=0; j<arr[i].length; j++) {
        if (i===0 && j===0) {
          uniqueArr.push(arr[i][j]);
        } else if (!uniqueArr.includes(arr[i][j])) {
            uniqueArr.push(arr[i][j]);
        }
      }
    }
    
    return uniqueArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));