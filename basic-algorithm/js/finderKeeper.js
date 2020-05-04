function findElement(arr, func) {
    let num = 0;
    
    for (let i = 0; i < arr.length-1; i++) {
        if(func(arr[i])){
            num = arr[i];
            break;
          
           
        }else{
           num =undefined;
        }
        
    }
    return num;
  }
  
  const result = findElement([1, 3, 3, 9], num => num % 2 === 0);
  console.log(result);