function largestOfFour(arr) {
  const largestNumbersOfFourArr=[];
     arr.forEach(subArr => {
         let largestNumber=-9000;
         subArr.forEach(number => {
              if(number>largestNumber){
                  largestNumber=number;
              }
             
         });
         largestNumbersOfFourArr.push(largestNumber);
     });
return largestNumbersOfFourArr;


}
  
  const result=  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  console.log(result);