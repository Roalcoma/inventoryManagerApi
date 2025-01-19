import { Router } from "express";
import { productsControllers } from "../controllers/productsControllers.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

export const productsRouter = Router();

productsRouter.get('/', authMiddleware, productsControllers.getProducts)

productsRouter.post('/', authMiddleware, productsControllers.postProducts)

