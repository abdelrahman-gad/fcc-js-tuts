function bouncer(arr) { 
    
 const trueArr=[];
  arr.forEach(element => {
      if(Boolean(element)==true){
           trueArr.push(element);
      }  
  });
     return trueArr;
}
  
  bouncer([7, "ate", "", false, 9]);
  