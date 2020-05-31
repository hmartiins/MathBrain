function authDelta(result: number) {
  if(result < 0){
    return false;
  } else if(result >= 0){
    return true;
  };
}
export {authDelta};