function sumFibs(num) {
  
    let fib = [];
    let fibNext = 0;
    for (let i=0; i<=num; i++) {
      if (i === 0) {
        fib.push(0);
      } else if (i === 1) {
        fib.push(1);
      } else {
        fibNext = fib[i-1] + fib[i-2];
        fib.push(fibNext);
      }
    };
    
    let fibImp = [];
    for (let j=0; j<fib.length; j++) {
      if (fib[j] % 2 === 1 && fib[j] <= num) {
        fibImp.push(fib[j]);
        var res = fibImp.reduce((tot, numb) => tot + numb);
      }
    }
    
    return res;
  }
  
  console.log(sumFibs(4));