function translatePigLatin(str) {

  let regex =/[aeiou]/gi;
  let finalPigLatin = '';
   if(str[0].match(regex)){ // first letter is vowel
        finalPigLatin +=str+'way';
   }else if(str.match(regex)===null){ //all letters are constants
       finalPigLatin =str+'ay';
   } else{
      let firstVowelIndex =str.indexOf(str.match(regex)[0]);
      finalPigLatin = str.substr(firstVowelIndex) +str.substr(0,firstVowelIndex) +'ay';
   }
  

  return finalPigLatin;
}

let res=  translatePigLatin("constant");
console.log(res);