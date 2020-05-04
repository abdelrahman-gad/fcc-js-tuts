function palindrome(str) {
//main steps 1-remove all non-alpha-numeric chars 2-turn all rest chars into small 3-reverse then test 

 let rawStr = str;
 let rawArr =str.split('');
 let sanitizedArr=[];
 let reversedArr= [];
 const isAlphaNumeric = ( char ) =>{
      // if char is  number ||  char is alphabet return true 
      // else return false 
       if(
           (char.charCodeAt('0') >= 48 && char.charCodeAt('0') <= 57) || //check if it is a number
           (char.charCodeAt('0') >= 65 && char.charCodeAt('0') <= 90)  || //check if it is a capital
           (char.charCodeAt('0') >= 97 && char.charCodeAt('0') <= 122)    // check if it is a small
           )
            {
                return true;
            }else{
                return false;
            }


 }
    
     rawArr.forEach(element => {
          if(isAlphaNumeric(element)){
                sanitizedArr.push(element.toLowerCase());
          }
     });
 
 // check it is the same even if we reserve
    for(let i = sanitizedArr.length-1; i >=0;  i-- ){
        reversedArr.push(sanitizedArr[i]);
    }

     if(sanitizedArr.join('') === reversedArr.join('')){
         return true;
     }else{
         return false;
     }
    

}

  
 let res =  palindrome("eyE");
 console.log(res);


