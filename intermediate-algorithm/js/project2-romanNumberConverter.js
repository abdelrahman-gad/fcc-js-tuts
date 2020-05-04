function convertToRoman(num) {
    var roman= "";
    var numbers =      [ 1000,  900 , 500, 400 , 100, 90,  50 , 40,  10,   9,    5,   4,    1];
    var romanNumeral = [ "M",  "CM",  "D", "CD", "C", "XC","L", "XL","X", "IX", "V", "IV", "I"];
     for(let i=0; i<numbers.length;i++){
         console.log(i);
         while(num >= numbers[i]){

           roman = roman + romanNumeral[i];
           num   = num - numbers[i];

         }
     }
     return roman; 
   }
   
  let result = convertToRoman(6);
   console.log(result);