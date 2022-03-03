function repeatStringNumTimes(str, num) {
    let arr = str.split();
    let arrC = arr.slice(0, 1);
    if (num <= 0) {
      arr = [];
      return arr.join();
    } else if (num == 1) {
        return arr.join();
      }
        else {
          for (let i=0; i<num-1; i++) {
            arr += arrC;
          }
        }
     
    return arr;
  }
  
  console.log(repeatStringNumTimes("abc", 1));