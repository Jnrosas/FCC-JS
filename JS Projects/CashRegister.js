function checkCashRegister(price, cash, cid) {
  
    let res = {status: "", change: []};
    let accu = 0, accum = 0, accumCid = 0;
       
    const model = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1]; //*100
    
    let change = (cash - price) * 100; // How much to give back
    const spareCid = JSON.parse(JSON.stringify(cid)); // Deep copy of Cid
    cid.reverse(); // Reverse Cid max to min
    
    for (let i=0; i<cid.length; i++) { // Looping Cid
      accu = 0; accum = 0;
      cid[i][1] *= 100; // * 100 as to avoid large decimal conflicts
      accumCid += cid[i][1];
      while (change > 0 && cid[i][1] > 0 && change >= model[i]) { // Looping each note currency
        cid[i][1] -= model[i]; // Extracts bills from each type of note
        change -= model[i]; // Extracts bills from the change money
        accu += model[i]/100; // How much extracts from rach type of notes
        accum = Number(accu.toFixed(2)); // Round and convert to number to avoid decimal conflicts
              
      } if (accum > 0) { // If deducts from each type, it records it
          res.status = "OPEN";
          res.change.push([cid[i][0], accum]);
      }
    };
    
    if (cash - price === accumCid/100) { // If change equals all available money
      res.status = "CLOSED";
      res.change = spareCid;
      return res;
    }
    if (change === 0) { // If no more change
      return res;
    }
    if (accumCid < change/100 || accum < change/100){
      res.status = "INSUFFICIENT_FUNDS";
      res.change = [];
      return res;
    }
    
  }
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))