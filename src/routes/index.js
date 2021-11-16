import { Router } from "express";
import { authRoutes } from "./authRoutes";
import { pixRoutes } from "./pixRoutes";
//import { withdrawRoutes } from "./withdrawRoutes";

const routes = Router();

routes.use(authRoutes);
routes.use(pixRoutes);
//routes.use(withdrawRoutes);

export { routes };
