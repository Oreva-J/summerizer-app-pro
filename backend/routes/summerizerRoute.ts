import { Router } from "express";
import { controllers } from "../controllers/summerizerController";

const router = Router()

const {controller} = controllers

router.get('/api/ask', controller)

export default router
