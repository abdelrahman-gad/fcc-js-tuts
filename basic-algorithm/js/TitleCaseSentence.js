function titleCase(str) {
    // connvert str to an array of words
    let sentenceArr=str.split(' ');
    let finalSentence='';
     //loop throagh the array and capitalize each word
     sentenceArr.forEach(word => {
         let wordArr =word.split('');
         let restWord='';
           wordArr[0]=wordArr[0].toUpperCase();
           let restWordArr=[];
           for(let i=1;i<wordArr.length;i++){
               restWordArr.push( wordArr[i].toLowerCase()) ;  
           }
            restWord=restWordArr.join('');

            word =   wordArr.join('');
            console.log(word[0]);
            console.log(restWord);

         finalSentence += word[0]+restWord+' ' ;
     });
    return finalSentence;
}
  
 const result=  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
  console.log(result);
  