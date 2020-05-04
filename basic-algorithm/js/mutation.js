function mutation(arr) {
    let containedWord=arr[1].toLowerCase();
    let containingWord=arr[0].toLowerCase();
    let containedWordArr=containedWord.split('');
    console.log(containedWordArr);
    let contains=true ;//boolean
    for(let i=0; i < containedWordArr.length; i++){
        
        if(containingWord.includes(containedWordArr[i]) == false){
               contains = false;
               break;
        }
    }
    return contains;     
 }

 const result = mutation(["Hello", "lheo"]);
console.log(result);
  