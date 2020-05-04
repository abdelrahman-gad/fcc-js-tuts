function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let newArr=[];
    let getOrbitalPeriod = (avgAlt) =>{
         let a = 2 * Math.PI;
         let c = Math.pow(earthRadius+avgAlt,3);
         let b = Math.sqrt(c/GM);
         return Math.round(a * b);
    }

     for(let i = 0; i< arr.length; i++){
         let element = {name:arr[i]['name'] , orbitalPeriod: getOrbitalPeriod(arr[i]['avgAlt'])}  ;
      
        newArr.push(element);
     }

    return newArr;
  }
  



let res =  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
console.log(res);