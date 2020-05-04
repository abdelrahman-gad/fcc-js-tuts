function sumAll(arr) {
       let sumArr = [...arr];
       sumArr.sort((a,b)=>a-b);
       let start=sumArr[0];
       let end  =sumArr[1];
       let sum = 0;
       for(let i=start; i <= end; i++){
           sum +=i;  
        }
    return sum;
  }
  
  const result = sumAll([4, 1]);

  console.log(result);