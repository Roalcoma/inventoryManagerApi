import { Router } from "express";
import { productsControllers } from "../controllers/productsControllers.js";

export const productsRouter = Router();

productsRouter.get('/all', productsControllers.getProducts)

