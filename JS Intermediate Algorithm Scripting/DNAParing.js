/*
function pairElement(str) {
  let arr = str.toUpperCase().split("");
  let arrGC = [], arrCG = [], arrAT = [], arrTA = [], resArr = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === "G") {
      arrGC = arr.slice(i, i+1).concat("C");
      resArr.push(arrGC);
    } else if (arr[i] === "C") {
      arrCG = arr.slice(i, i+1).concat("G");
      resArr.push(arrCG);
    } else if (arr[i] === "A") {
      arrAT = arr.slice(i, i+1).concat("T");
      resArr.push(arrAT);
    } else if (arr[i] === "T") {
      arrTA = arr.slice(i, i+1).concat("A");
      resArr.push(arrTA);
    } else {
      return "Not Valid Entry";
    }
  }
  return resArr;
}
console.log(pairElement("GCG"));
*/

// Another shortes way sing objects ==================
function pairElement(str) {
  
    let arr = str.toUpperCase().split("");
    
    obj = {
      A: "T",
      T: "A",
      G: "C",
      C: "G"
    };
    
    return arr.map(item => [item, obj[item]]);
    
  }
  console.log(pairElement("GCGAT"))