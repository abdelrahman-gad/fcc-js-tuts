function chunkArrayInGroups(arr, size) {
     
          // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
     
    arr2.push(arr.slice(i, i + size));
  }
  console.log(arr2);
  return arr2;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d","e"], 2);
  