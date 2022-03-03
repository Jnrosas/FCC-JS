function convertHTML(str) {
  
    let res = str.split("");
    for (let i=0; i<res.length; i++) {
      switch (res[i]) {
        case "&":
          res[i] = "&amp;";
          break;
        case "<":
          res[i] = "&lt;";
          break;
        case ">":
          res[i] = "&gt;";
          break;
        case "'":
          res[i] = "&apos;";
          break;
        case `"`:
          res[i] = "&quot;";
          
      }
    }
  
  return res.join("")                
  }
  console.log(convertHTML("Schindler's List"));
  
  /* Another method using Objects  ================================
  
  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  // test here
  convertHTML("Dolce & Gabbana")*/