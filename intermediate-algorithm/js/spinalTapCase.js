function spinalCase(str) {
    
// convert to array
let strArray=Array.from(str);
let modifiedArray=[];
for(let i=0; i<strArray.length;i++){
  if(strArray[i].charCodeAt(0) > 64 && strArray[i].charCodeAt(0) < 90 ){
    modifiedArray.push(' '); 
    modifiedArray.push(strArray[i].toLowerCase());
    
  } 
  else if(strArray[i].charCodeAt(0)>96 && strArray[i].charCodeAt(0) < 122 ){
    modifiedArray.push(strArray[i]);
  }else{
    modifiedArray.push(' ');
  }

}
let modifiedString=modifiedArray.join('').trim();
 return modifiedString.split(' ').filter(word=>word.length > 0).join('-');
 


}
  
 const result = spinalCase('This             Is_Spinal-Tap');
  console.log(result);

  

console.log('Z'.charCodeAt(0));


