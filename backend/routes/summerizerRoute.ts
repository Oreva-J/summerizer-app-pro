import { Router } from "express";
import { controllers } from "../controllers/summerizerController";

const router = Router()

const {controller, getProductReviews} = controllers

router.get('/api/ask', controller)

router.get("/api/product/:id/review", getProductReviews)



export default router
