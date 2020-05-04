function convertHTML(str) {
    const htmlEntitiesConverter =(symbol) =>{
        let htmlEntitiesChars        =[ '&'  ,   '<'  , '>'   ,   '"'  ,  "'"];
        let htmlEntitiesCorresponding=['&amp;' , '&lt;','&gt;', '&quot;','&apos;' ];
        let i = htmlEntitiesChars.findIndex(element=>element===symbol);
        return htmlEntitiesCorresponding[i];        
    }
    const isHTMLEntity =(input) => {
        if([ '&'  ,   '<'  , '>'   ,   '"'  ,  "'"].join('').indexOf(input)>-1){
          return true;
        }else{
          return false;
        }
    }
    
    let strArray=str.split('');
    let finalArray=[];
    strArray.forEach( element => {
        if(!isHTMLEntity(element)){
          finalArray.push(element)
        } else{
         finalArray.push(htmlEntitiesConverter(element));
        } 
    });

    return finalArray.join('');
  }
  
  const res = convertHTML("Dolce ' Gabbana");
  console.log(res);