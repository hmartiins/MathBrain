import { Request, Response} from 'express';

function calculateDelta(
  coefficientA: number, 
  coefficientB: number, 
  coefficientC: number
){
  const result = 
    (coefficientB*coefficientB) - 4 * coefficientA * coefficientC;
  
  console.log(result);
}

export default{
  async index(request: Request, response: Response){
    return response.send(calculateDelta(15, 15, 3));
  }
}