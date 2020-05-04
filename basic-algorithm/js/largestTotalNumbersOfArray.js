function largestOfFour(arr) {
      let largestNumber=0;
      let largestArr=[];
      console.log(largestArr);
      arr.forEach(subArr => {
           const totalNumbersOfSubArr=subArr.reduce((a,b)=>a+b);
          
        if(totalNumbersOfSubArr > largestNumber){
            largestArr=subArr;
            largestNumber= totalNumbersOfSubArr;
           
        }
      });
     return largestArr;
  }
  
const result= largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(result);

