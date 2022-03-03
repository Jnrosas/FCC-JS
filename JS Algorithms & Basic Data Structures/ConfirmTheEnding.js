function confirmEnding(str, target) {
    let regex = new RegExp(`.*${target}$`);
    
    return regex.test(str);
  }
  
  console.log(confirmEnding("Bastian", "n"));