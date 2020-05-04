function uniteUnique(arr) {
      let nonModifiedArray=[];
      let finalArray=[];
     [ ...  arguments ].forEach(subArray => {
         subArray.forEach(num =>{
            nonModifiedArray.push(num);
         });
      });

      nonModifiedArray.forEach(element => {
          if(finalArray.indexOf(element) < 0){
            finalArray.push(element);
          }
      });
     return finalArray;
  }
  
 const result =  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  