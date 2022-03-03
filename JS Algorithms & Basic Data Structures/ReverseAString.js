function reverseString(str) {
  
    let a = str.split("");
    let b = a.reverse();
    let c = a.join("");
    return c
  }
  
  console.log(reverseString("hello"));