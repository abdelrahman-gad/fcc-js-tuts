function addTogether() {
    let argsArr =[...arguments];

          // first  
   //case  1 -> argsArr.length=0; or one of the elements is not a number return undefined
   //case  2 -> argsArr.length=1; return function with stored data 
   //case  3 -> argsArr.length=2; return array's elements added together

    if( argsArr.length ==0  ||  ( (argsArr.every(element=> Number.isInteger(element) )) == false) ){
       return undefined;
    }else if(argsArr.length == 1 ) {
        return  function(num) {
               if(Number.isInteger(num)==false){
                   return undefined;
               }else{
                   return num + argsArr[0];
               }
        }
    }else {
        return argsArr[0] + argsArr[1];
    }

    
  }
  
  let  addTwo = addTogether(2,3);

  console.log(addTwo);