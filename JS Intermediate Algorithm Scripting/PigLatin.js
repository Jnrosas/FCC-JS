/*
function translatePigLatin(str) {
  
  let regexV = /^[aeiou]/;
  let regexC = /^[^aeiou]+/;
  let consR = str.match(regexC);
  let newStr = str.split("");
  let newerStr = [];
  
  if (regexV.test(str)) {
    newStr.push("way");
    newerStr = newStr.join("")
  } else if (regexC.test(str)) {
      newStr.splice(0, consR.join().length);
      newStr.push(consR + 'ay');
      newerStr = newStr.join("");
  }
    
  return newerStr;
}
console.log(translatePigLatin("onsonant"));
*/

// Otro metodo super corto con replace ==================
function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay")
  }
  console.log(translatePigLatin("crtonsonant"))