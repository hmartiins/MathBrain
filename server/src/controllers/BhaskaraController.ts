import { Request, Response } from 'express';
import { authDelta } from './AuthController';

function calculateDelta(
  coefficientA: number, 
  coefficientB: number, 
  coefficientC: number
){
  const result = 
    (coefficientB * coefficientB) - 4 * (coefficientA * coefficientC);

  return result;
};

function calculateBhaskara(
  coefficientA: number, 
  coefficientB: number, 
  delta: number,
){
  const resultBhaskara = {
    delta: delta,
    x1: (-(coefficientB) + (Math.sqrt(delta)))/(2 * coefficientA),
    x2: (-(coefficientB) - (Math.sqrt(delta)))/(2 * coefficientA)
  }

  return {resultBhaskara};
};

export default{
  index(request: Request, response: Response){
    const { a, b, c } = request.body;

    const delta = calculateDelta(a, b, c);
    const status = authDelta(delta);
    
    if(status === true){
      const resultAcount = calculateBhaskara(a, b, delta);
      return response.send(resultAcount);
    } else if(status === false){
      return response.send({
        deltaValue: delta,
        message: 'The delta has no real roots'
      });
    }
  }
}