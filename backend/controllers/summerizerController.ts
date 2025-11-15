import type { Request, Response } from "express";
import { dataReview, getProduct, getSummary } from "../db/database";
import { summeriseService } from "../services/summerizerService";


const controller = (req: Request, res: Response)=>{
    res.json({message: "I will give"})
}

const summerizeReviews = async(req: Request, res: Response) =>{
    const productId = Number(req.params.id)
        if(isNaN(productId)){
            res.status(400).json({error: "invalid product ID"})
        }
        const isProduct = await getProduct(productId)
        if (!isProduct) {
            res.status(400).json({error: "Invalid Product"})
            return
        }
        const isReview = await dataReview(productId, 1)
        if (!isReview) {
            res.status(400).json({error: "No Reviews to summerise"})
            return
            
        }
        const summerisedReview = await summeriseService(productId)
        
        res.json(summerisedReview)
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
    summerizeReviews
}