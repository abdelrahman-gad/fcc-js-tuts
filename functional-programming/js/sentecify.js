function sentensify(str) {
    // Only change code below this line
     let wordsArr= str.split(/\W/);
     let sentence=wordsArr.join(" ");
      return sentence;
     // Only change code above this line
  }
  const result =  sentensify("May,the-force-be-with-you");
  console.log(result);