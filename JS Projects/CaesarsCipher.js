function rot13(str) {
    const rot13 = {A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T",
                  H: "U", I: "V", J: "W", K: "X", L: "Y", M: "Z", N: "A", 
                   O: "B", P: "C", Q: "D", R: "E", S: "F", T: "G", U: "H", 
                   V: "I", W: "J", X: "K", Y: "L", Z: "M", " ": " ", "!": "!",
                  "?": "?", ".": "."};
    
    let res = [];
    let arr = str.split("").map(char => {
      if (rot13.hasOwnProperty(char)) {
        res.push(rot13[char]);
      } 
    });
    
    return res.join("");
  }
  
  console.log(rot13("SERR PBQR PNZC!"));