import type { Request, Response } from "express";
import { dataReview, getProduct, getSummary } from "../db/database";


const controller = (req: Request, res: Response)=>{
    res.json({message: "I will give"})
}

const getProductReviews = async(req: Request, res: Response) =>{
    
    const productId = Number(req.params.id)
    if(isNaN(productId)){
        res.status(400).json({error: "invalid product ID"})
    }
    
    const product = await getProduct(productId)
    if (!product) {
        res.status(404).json({error: "Product does not exit"})
        
    }

    const reviews = await dataReview(productId)
    const summary =  await getSummary(productId)

    res.json({reviews, summary})
}


export const controllers ={
    controller,
    getProductReviews,
}