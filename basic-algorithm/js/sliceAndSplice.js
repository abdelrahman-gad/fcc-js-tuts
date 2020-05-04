function frankenSplice(arr1, arr2, n) {

   const sliceArrFirst=arr2.slice(0,n);
   const sliceArrLast= arr2.slice(n,arr2.length);
   const finalArr=[...sliceArrFirst,...arr1,...sliceArrLast];
   console.log(arr1);
   console.log(arr2);
   console.log(finalArr);

   return finalArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 2 );
  