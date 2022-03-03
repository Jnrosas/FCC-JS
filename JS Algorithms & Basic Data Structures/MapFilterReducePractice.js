const squareList = arr => {
    // Only change code below this line
    /*const newArr = [];
    arr.filter(item => {
      if (Number.isInteger(item) && item > 0) {
          newArr.push(item);
      }})
      .map(item => item ** 2)
    const newerArr = newArr.map(item => item ** 2)
    
    return newerArr;*/
    // Only change code above this line
    
    return arr
             .filter(item => Number.isInteger(item) && item > 0)
             .map(item => item ** 2)
  };
  
  const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
  console.log(squaredIntegers);