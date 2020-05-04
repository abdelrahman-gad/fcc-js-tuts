const squareList = (arr) => {
    // Only change code below this line
     let squaredArr=arr.filter(num => num>0)
                        .filter(num =>num % 1 ==0) //check than num is integer
                        .map(num => num * num);
  
        return squaredArr; 
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  
  console.log( 1%1.23 > 0);
  console.log(11%1);