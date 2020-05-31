import { Request, Response } from 'express';

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
    const resultAcount = calculateBhaskara(a, b, delta);
    
    return response.send(resultAcount);
  }
}