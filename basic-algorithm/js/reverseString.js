function reverseString(str) {
    tempArr=str.split('');//convert into an array
    reversedArr=tempArr.reverse();//reverser the array
    
    reversedString = reversedArr.join('');
    return reversedString;
  }
  
  reverseString("hello");
