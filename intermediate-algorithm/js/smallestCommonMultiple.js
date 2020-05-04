function smallestCommons(arr) {
   
     let dividables=[];
     arr.sort((a,b)=> a-b );
     for(let i = arr[1]; i >= arr[0]; i-- ){
         dividables.push(i);
     }
     
     let divide=0;
     for(let i=0; i<=dividables.length;i++){
           divide = dividables[i]*dividables[i+1];

     }
    
     console.log(divide);
  }
  
  
  smallestCommons([3,1]); 
 
  // [2,1] 2
  