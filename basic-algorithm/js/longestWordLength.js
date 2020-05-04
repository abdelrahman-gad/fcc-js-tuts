function findLongestWordLength(str) {
    const tempArr=str.split(' ');
    let longestStr='';
    tempArr.forEach(word =>{
       if(word.length > longestStr.length ){
          longestStr = word;
       }
       
    });
    return longestStr.length;
  
  }
    
    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));