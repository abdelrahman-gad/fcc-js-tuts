function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    var sourceKeys=Object.keys(source);

   arr = collection.filter(obj=>{
     return sourceKeys.every(key=>{
       return obj.hasOwnProperty(key) && obj[key]===source[key];
     }) 

    });

    // Only change code above this line
    return arr;
  }
  
  const res=
  whatIsInAName([
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" });
  console.log(res);