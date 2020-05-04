function binaryAgent(str) {
     //convert string to array
    const binaryArr=str.split(' ');
    // convert each binary coded element into its corresponiding char
    const charsArr= binaryArr.map(binary=>{
        return String.fromCharCode(parseInt(binary,2));
    });
       console.log(charsArr);
    // console.log(String.fromCharCode(parseInt("01110010",2)));
    return charsArr.join('');
  }
  
 const res =  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  console.log(res);