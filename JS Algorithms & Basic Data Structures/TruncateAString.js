function truncateString(str, num) {
    //Opcion 1, usando .splice
    /*let arr = str.split("");
    if (num < str.length) {
      arr.splice(num, arr.length - num, "...");
      return arr.join("");
    } else {
        arr.splice(num, arr.length - num);
        return arr.join("");
     }*/
    
    //Opcion 2, usando .slice
    if (num < str.length) {
      let copy = str.slice(0,num);
      return copy + "...";
    } else {
      let copy = str.slice(0,num);
      return copy;
    }
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));