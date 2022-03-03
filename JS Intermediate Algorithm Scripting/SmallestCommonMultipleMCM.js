function smallestCommons(arr) {
    
    let min = Math.min(arr[0], arr[1]), max = Math.max(arr[0], arr[1]), cont = 0, res = "";
    
    const cantMult = Array(max - min + 1).fill(0).map((_, index) => index + min);
    const upLimit = cantMult.reduce((tot, curr) => tot * curr);
   
    for (let i = max; i <= upLimit; i += max) {
      cont = 0;
      res = cantMult.every((num) => i % num === 0);
      if (res) {
        return i;
      }
    }
  }
  console.log(smallestCommons([23,18]));