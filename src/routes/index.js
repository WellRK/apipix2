import { Router } from "express";
import { authRoutes } from "./authRoutes";
import { pixRoutes } from "./pixRoutes";
import { withdrawRoutes } from "./withdrawRoutes";
import { saldoRoutes } from "./saldoRoutes";

const routes = Router();

routes.use(authRoutes);
routes.use(pixRoutes);
routes.use(withdrawRoutes);
routes.use(saldoRoutes);

export { routes };
