function largestOfFour(arr) {
    let largestFromSubArr = (-9)**9;
    let largestArray = [];
    for (let i=0; i<arr.length; i++) {
      for (let j=0; j<arr[i].length; j++) {
        if (arr[i][j] > largestFromSubArr) {
          largestFromSubArr = arr[i][j];
        }
      }
      largestArray.push(largestFromSubArr)
      largestFromSubArr = (-9)**9;
    }
    return largestArray;
  }
  
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));