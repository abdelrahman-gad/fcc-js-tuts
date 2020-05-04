function dropElements(arr, func) {
      let pointer =0;
      let finalArr =[];
    for(let i=0;i<=arr.length;i++){
        if(func(arr[i])===true){
          pointer=i;
          finalArr = arr.slice(pointer,arr.length);
          break;
        }
        
    }
    
      return finalArr;

  }
  
  const res =  dropElements([0, 1, 0, 1], function(n) {return n === 1;});
  console.log(res);
