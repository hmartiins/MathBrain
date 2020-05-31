import { Request, Response } from 'express';

function calculateDelta(
  coefficientA: number, 
  coefficientB: number, 
  coefficientC: number
){
  const result = 
    (coefficientB * coefficientB) - 4 * (coefficientA * coefficientC);

  console.log(result);
}

export default{
  index(req: Request, response: Response){
    const { a, b, c } = req.body;

    return response.send(calculateDelta(a, b, c));
  }
}