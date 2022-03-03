function arrMax(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [max, min];
  }
    
  function summarise(max, min) {
    if (max === 0) {
      return 0;
    } else if (max > min) {
      return max + summarise(max-1, min);
    } else {
      return max;
    }
  } 
  let maxmin = arrMax([1, 4]);
  console.log(summarise(maxmin[0], maxmin[1]));
  
  /* function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  sumAll([1, 4]);
  
  // Otra con recursion=====================================
  
  function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
      ? first + sumAll([first + 1, last])
      : first;
  }
  
  sumAll([1, 4]);
  */