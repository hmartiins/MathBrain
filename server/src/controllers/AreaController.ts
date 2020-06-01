import { Request, Response } from 'express';
import { authMeasure } from './AuthController';

function calculateTriangle(base: number, height: number){
  const result = {
    base: base,
    height: height,
    result: (base * height)/2
  }

  return result;
};

function calculateRectangle(base: number, height: number){
  const result = {
    base: base,
    height: height,
    result: base * height
  }

  return result;
};

function calculateCircle(radius: number){
  const resultAccount = Math.PI*(radius * radius);

  const result = {
    radius: radius,
    pureResult: resultAccount,
    approximateResult: resultAccount.toFixed(2)
  }
  return result;
};

export default{
  triangle(request: Request, response: Response){
    const { base, height } = request.body;

    const statusMeasure = authMeasure(base, height);

    if(statusMeasure === true){
      const resultArea = calculateTriangle(base, height);
      return response.send({resultArea});
    } 
    else if(statusMeasure === false){
      return response.send({
        "message": 'There is no area with negative measures'
      });
   };
  },
  rectangle(request: Request, response: Response){
    const { base, height } = request.body;

    const statusMeasure = authMeasure(base, height);

    if(statusMeasure === true){
      const resultArea = calculateRectangle(base, height);
      return response.send({resultArea});
    } 
    else if(statusMeasure === false){
      return response.send({
        "message": 'There is no area with negative measures'
      });
   };
  },
  circle(request: Request, response: Response){
    const { radius } = request.body;

    const resultArea = calculateCircle(radius);
    return response.send({resultArea}); 
  }
};