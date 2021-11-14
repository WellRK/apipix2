import { Router } from "express";
import { authRoutes } from "./authRoutes";
import { pixRoutes } from "./pixRoutes";

const routes = Router();

routes.use(authRoutes);
routes.use(pixRoutes);

export { routes };
