function truthCheck(collection, pre) {
      
     // all elements in the collction should has the propery pre
     if(collection.every(element=>element.hasOwnProperty(pre)) &&
      collection.every(element=> Boolean(element[pre])===true)){
          return true;
      }else {
          return false;
      }
      

    
  }
  
  const res = 
  truthCheck([
                {"user": "Tinky-Winky", "sex": "male"},
                {"user": "Dipsy", "sex": "male"},
                {"user":"gad","sex":0},
                {"user": "Laa-Laa", "sex": "female"},
                {"user": "Po", "sex": "female"}
            ],
                  "sex");
  

                  console.log(res);