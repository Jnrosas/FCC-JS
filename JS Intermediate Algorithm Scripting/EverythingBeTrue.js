function truthCheck(collection, pre) {
    for (let obj of collection) {
      if (!obj.hasOwnProperty(pre) || !obj[pre]) {
        return false;
      } 
    } return true;
    
  }
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));