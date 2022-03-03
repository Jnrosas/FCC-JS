function titleCase(str) {
    let arr = str.split(" ");
    let arr2 = [];
    for (let i=0; i<arr.length; i++) {
     
      arr2.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
    } 
    return arr2.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));