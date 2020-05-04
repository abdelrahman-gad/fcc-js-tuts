function steamrollArray(arr) {
    let strArr = arr.toString();
      //extract values
      let itemsArr= strArr.replace(',,',',').split(',');
      return  itemsArr.map( item => {
          console.log(item);
          if( item == "[object Object]"){
             return {};
          }else if(isNaN(item)){
              return item;
          }else{
              return parseInt(item);
          }
      }); 
   
     
   }
   
  const res =  steamrollArray([1, {} , [3, [[4]]]]);
   
  console.log(res);