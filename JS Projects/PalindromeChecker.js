function palindrome(str) {
    let newStr = str.replace(/([\W+_])/gi, "").toLowerCase();
    if (newStr === newStr.split("").reverse().join("")) {
      return true;
    } return false;
     
  }
  
  console.log(palindrome("_*(eye"));