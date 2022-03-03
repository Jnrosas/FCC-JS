function sumPrimes(num) {
    let arr = [];
    let prime = [];
    for (let i=2; i<=num; i++) {
      arr.push(i);
    };
    
    prime = arr.filter(isPrime);
    function isPrime(num) {
      for (let i=2; i<num; i++) {
        if (num % i === 0) {
          return false;
        }
      } return num > 1;
    };
    return prime.reduce((sum, int) => sum + int);
  }
  console.log(sumPrimes(10));