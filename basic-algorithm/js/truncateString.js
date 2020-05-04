function truncateString(str, num) {
      let sentenceLength=str.length;
      let truncatedSentence = str.slice(0,num);
      if(sentenceLength>num){
        return truncatedSentence += '...';         
      }else{
          return truncatedSentence;
      }
}
  
const result=  truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length);
console.log(result);
