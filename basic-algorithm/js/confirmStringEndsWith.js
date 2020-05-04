function confirmEnding(str, target) {
     
   var exists=new RegExp(target+'$').test(str);
    return exists;
  }
  
 const result= confirmEnding("Bastian", "an" );
  console.log(result);