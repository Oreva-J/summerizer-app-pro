import { Router } from "express";
import { controllers } from "../controllers/summerizerController";

const router = Router()

const {controller, getProductReviews, summerizeReviews } = controllers

router.get('/api/ask', controller)

router.post("/api/product/:id/summerise", summerizeReviews)
router.get("/api/product/:id/review", getProductReviews)


export default router
