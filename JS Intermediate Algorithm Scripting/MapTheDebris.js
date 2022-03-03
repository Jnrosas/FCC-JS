function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    for (let elem of arr) {
      if (elem.hasOwnProperty("avgAlt")) {
        elem.orbitalPeriod = Math.round(2*Math.PI* 
          (Math.sqrt(((elem["avgAlt"]+earthRadius)**3)/GM)));
        delete elem["avgAlt"];
      }
      
    }
    return arr;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));