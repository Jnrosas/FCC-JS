function bouncer(arr) {
    for (let i=0; i<arr.length; i++) {
      if (!arr[i]) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));