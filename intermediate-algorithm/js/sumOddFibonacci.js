function sumFibs(num) {
   if(num <= 0) return 0;
    const arrFibs=[1,1];
    let result = 0;
   while((result =arrFibs[0]+arrFibs[1]) <=num){
        arrFibs.unshift(result);
   }
 
     return arrFibs.filter(num=>num%2 !==0).reduce((a,b)=>a+b);
  
  }
  
  let res = sumFibs(1000);
  console.log(res);

  
