function findLongestWordLength(str) {
    let arr = str.split(" ");
    let longest = 0;
    for (let i=0; i<arr.length; i++){
      if (longest <= arr[i].length){
        longest = arr[i].length;
        word = arr[i];
      } continue;
    } return [longest, word]
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  
  
  