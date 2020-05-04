function fearNotLetter(str) {
    let start =str[0];
    let end   =str[str.length-1];
    
    let  alphabets='abcdefghijklmnopqrstuvwxyz';
    let startPointer=alphabets.indexOf(start);
    let endPointer=alphabets.indexOf(end);  
    let completeSliceString = alphabets.slice(startPointer,endPointer+1);
    let completeSliceArray=completeSliceString.split(''); 
    let finalDroppedLettersArray=[];
    
    if(str===completeSliceString){
      return undefined;
    }else{
      completeSliceArray.forEach(letter=>{
          if( !str.includes(letter) ){
             finalDroppedLettersArray.push(letter);
          }
      });
      return finalDroppedLettersArray.join('');
    }
  
  }
  
  const res= fearNotLetter("abcdh");
  console.log(res);



