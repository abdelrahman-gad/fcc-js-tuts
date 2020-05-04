function rot13(str) {

    let originalArr = str.split('');
    let rotatedArr=[];
    let isCapital = (char) => { //check if the char is a capital letter
       return (char.charCodeAt('0') >= 65 && char.charCodeAt('0') <= 90)?true:false;
    }   
   

    let rot13Converter = (char)=>{
        const originalCapitals  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const rotated13Capitals = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
        let pointer = originalCapitals.indexOf(char);
        return rotated13Capitals[pointer];
    }

         originalArr.forEach( letter => {

           if(isCapital(letter)){
                  rotatedArr.push(rot13Converter(letter));        
            }else{
                rotatedArr.push(letter);
            }
     });



   return rotatedArr.join('');


  }
  
  let res = rot13("SERR PBQR PNZC ?!");
  console.log(res);