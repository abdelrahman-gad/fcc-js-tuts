function checkCashRegister(price, cash, cid) {
    const REGISTER_STATUS={closed:'CLOSED',open:'OPEN',insufficient_fund:'INSUFFICIENT_FUNDS'};
    const changeNeeded= parseFloat(cash-price).toFixed(2);

//  build functions
 // calculate the total amount of mony in the cash in drawer
    const getTotalCashRegisterChange= (cid) => {
          let total=0;
        for(let i=0;i<cid.length;i++){
           total += cid[i][1];
        }
        return parseFloat(total.toFixed(2));
    }

// check the REGISTER_STATUS based on( the change needed to be returned to customer)  and the change available
    const getTotalCashRegisterStatus= (changeNeeded,changeAvailable) => {
         if(Number(changeNeeded) > Number(changeAvailable) ){
                return REGISTER_STATUS.insuffi;
         }else if(Number(changeNeeded) < Number(changeAvailable)){
                return REGISTER_STATUS.open;
         }else{
                return REGISTER_STATUS.closed;
         }
    }

// get the soutable format  change back to customer based on the change needed and available change currencies in drawer
    const getCustomersChange =(changeNeeded , changeInDrawer) => {
         let   change = [];
           const currencyDictionary={
                "PENNY": 0.01,
                "NICKEL": 0.05,
                "DIME": 0.10,
                "QUARTER": 0.25,
                "ONE": 1.00,
                "FIVE": 5.00,
                "TEN":10.00,
                "TWENTY": 20.00,
                "ONE HUNDRED": 100.00
           }

        for(let i=changeInDrawer.length-1;  i>=0; i-- ){
          const coinName  = changeInDrawer[i][0];
          const coinTotal = changeInDrawer[i][1];
          const coinValue = currencyDictionary[coinName];
          let coninAmount = (coinTotal/coinValue).toFixed(2);
          let coinsToReturn = 0;
          while(changeNeeded>=coinValue && coninAmount>0){
            changeNeeded -= coinValue;
            changeNeeded = changeNeeded.toFixed(2);
            coninAmount--;
            coinsToReturn++;
          }
          if(coinsToReturn > 0){
               change.push([coinName,coinsToReturn * coinValue ]);
          }
      
        }
        return change;
    }

// invoke the previous three functions to get back the changes 



    let cashRegister={status: '', change:cid};
    const changeAvailable = getTotalCashRegisterChange(cid);
     cashRegister.status = getTotalCashRegisterStatus(changeNeeded,changeAvailable);
    if(cashRegister.status === REGISTER_STATUS.insufficient_fund){
      cashRegister.change=[];
      return cashRegister;
    }
    cashRegister.change=getCustomersChange(changeNeeded,cid);
    if(changeNeeded>getTotalCashRegisterChange(cashRegister.change)){
          cashRegister.status=REGISTER_STATUS.insufficient_fund;
          cashRegister.change=[];
    }
    if(cashRegister.status===REGISTER_STATUS.closed){
      cashRegister.change=[...cid];
    }
    return cashRegister;
  }


  

  let res = checkCashRegister(3.26, 100,
    [["PENNY", 1.01], ["NICKEL", 2.05],
     ["DIME", 3.1], ["QUARTER", 4.25],
      ["ONE", 90], ["FIVE", 55], ["TEN", 20],
       ["TWENTY", 60], ["ONE HUNDRED", 100]]); 
  
                              console.log(res);
                              // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] );