function fearNotLetter(str) {
  
    let act = "", ant = "";
    for (let i=0; i<str.length; i++) {
      ant = act;
      act = str.charCodeAt(i);
      
      if (i > 0 && act > ant + 1) {
        return String.fromCharCode(ant + 1);
      }
    } return undefined
    
  } 
  console.log(fearNotLetter("acdef"));