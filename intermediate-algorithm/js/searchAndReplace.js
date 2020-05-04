function myReplace(str, before, after) {
   let strToArray = str.split(' ');
   const isCapital =(letter)=>{
        if(letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91   ){
            return true;
        }else {
            return false;
        }
    }
      const capitalize =(word)=>{
        let wordArray = Array.from(word);
        let capitalizedWord = [wordArray[0].toUpperCase(), ...wordArray.slice(1,wordArray.length)].join('');
        return capitalizedWord;  
    }

   for(let i=0;i<strToArray.length;i++){
    if(strToArray[i] == before){
      if(isCapital(strToArray[i][0])){
          strToArray[i] = capitalize(after);
      }else{
          strToArray[i] = after;
      }
    }

   } 
 
   return strToArray.join(' ');
   

  }
  
 const result =  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
 console.log(result);