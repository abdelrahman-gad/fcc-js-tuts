function booWho(bool) {
    return typeof bool =='boolean'?true:false;
  }
  
  const result= booWho(undefined);
  console.log(result);