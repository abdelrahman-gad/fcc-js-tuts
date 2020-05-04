function sumPrimes(num) {
    let total=0;
    const isPrime =(n)=>{

       for(let i=2;i<n;i++){
           if(n%i===0) return false;
       }
       return n !==1 && n !==0;
    }
    for(let i=0; i <=num ; i++){
      if(isPrime(i)){
          total +=i;
      }
    }

    return total;
  }
  
  const res =  sumPrimes(10);
  console.log(res);