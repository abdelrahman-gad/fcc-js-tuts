function repeatStringNumTimes(str, num) {
    let totalSTR='';
     for(let i=1;i<=num;i++){
        totalSTR +=str;
     } 
     return totalSTR;
}
  
  const result=  repeatStringNumTimes("abc", 3);
  console.log(result);