function destroyer(arr) {
     let destroyableArr = arguments[0];
     let similarsArr = [];
     let finalArr=[];
    //  console.log(destroyableArr);
     for(let i= 1; i < arguments.length;i++){
        similarsArr.push(arguments[i]);
     }
    //  console.log(similarsArr);
     
     for(let j =0; j < destroyableArr.length; j++){
        if(similarsArr.indexOf(destroyableArr[j]) < 0 ){
            finalArr.push(destroyableArr[j]);
        }
    }    

       
    return finalArr;
   }
  
   const result= destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3 );
    
    console.log(result); // [1,1]