function frankenSplice(arr1, arr2, n) {
    let arr4 = arr2.slice(0);
    if (n === 0) {
      return arr1;
    } else {
        for (let i=0; i<arr4.length; i++) {
          if (i === n) {
            let m = n;
            for (let j=0; j<arr1.length; j++) {
              arr4.splice(m, 0, arr1[j]);
              m++;
            }
          }
        }
    }
     
    return arr4;
  }
  console.log(frankenSplice([1, 2, 3, 4], [], 0));
  
  //Forma mas resumida usando el operador SPREAD
  /*function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }
  console.log(frankenSplice([1, 2, 3, 4], [], 0));
  */