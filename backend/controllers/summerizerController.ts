import type { Request, Response } from "express";


const controller = (req: Request, res: Response)=>{
    res.json({message: "I will give"})
}


export const controllers ={
    controller
}