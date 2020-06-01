function authDelta(result: number) {
  if(result < 0){
    return false;
  } else if(result >= 0){
    return true;
  };
};
export {authDelta};

function authMeasure(coefficient1: number, coefficient2?: number) {
  if(!coefficient2) {
    if(coefficient1 > 0){
      return true;
    } 
  }else if(coefficient2 > 0 && coefficient1 > 0){
    return true;
  }else { 
    return false;
  };
};
export {authMeasure};