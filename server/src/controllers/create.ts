import { Request, Response,NextFunction } from "express";
export default async (req:Request, res:Response, next:NextFunction) => {
    res.send('create'); 
}
