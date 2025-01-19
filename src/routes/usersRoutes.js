import { Router } from "express";
import { usersControllers } from "../controllers/usersControllers.js";

export const usersRouter = Router();

usersRouter.post('/login', usersControllers.loginUser)