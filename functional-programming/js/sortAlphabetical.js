function alphabeticalOrder(arr) {
    // Only change code below this line
    let sortedUnicodeArr=[] ;//indexes of letters in the ASCII code table
    let sortedLettersArr=[];  //real letters
      arr.forEach(letter => {
        sortedUnicodeArr.push(letter.charCodeAt());
      });  
      sortedUnicodeArr.sort((a,b)=>a-b);
      sortedUnicodeArr.forEach(unicode=>{
      let  originalLetter= String.fromCharCode(unicode);
          sortedLettersArr.push(originalLetter);
      });
    console.log(sortedLettersArr);
    return sortedLettersArr;
    // Only change code above this line
 
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
  