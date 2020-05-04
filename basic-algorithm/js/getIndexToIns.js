function getIndexToIns(arr, num) {
   const  sortedArr = arr.sort();
   console.log(sortedArr);
//    let index = 0;
   if( sortedArr === []){
      console.log('empty');
   }else if(arr.length){
    for(let i=0; i< sortedArr.length; i++ ){ 
        if( num <= sortedArr[i]){
          return i;
        }     
    }
   }
       
}
  
  const result= getIndexToIns([], 50);
//   console.log(result);