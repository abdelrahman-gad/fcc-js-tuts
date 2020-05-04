function diffArray(arr1, arr2) {
       let bigArray = []; 
       let smallArr =[]; 
       let differArray=[]
    //    assign the longer Array and shorter array properly whatever was the order of parameter passed
       if(arr1.length > arr2.length){
           bigArray = arr1;
           smallArr = arr2;
       }else{
        bigArray = arr2;
        smallArr = arr1;
       }
    // compare each element in the bigArray with the smallArray
      
        bigArray.forEach(value => {
             if(smallArr.indexOf(value) < 0){ // index < 0 [means it exists]
                differArray.push(value);
             }
        });
        // revers the loop 
        smallArr.forEach(value => {
            if(bigArray.indexOf(value) < 0){ // index < 0 [means it exists]
               differArray.push(value);
            }
       });



     
        return differArray;


  }
  
  const result = diffArray( [1, 2 , 8, 4, 7, 5],[1, 2, 3, 5]);
  console.log(result);