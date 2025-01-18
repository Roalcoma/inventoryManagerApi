import { Router } from "express";
import { productsControllers } from "../controllers/productsControllers.js";

export const productsRouter = Router();

productsRouter.get('/', productsControllers.getProducts)

productsRouter.post('/', productsControllers.postProducts)

