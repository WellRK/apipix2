import { Router } from "express";
import { authRoutes } from "./authRoutes";
import { saldoRoutes } from "./saldoRoutes";

const routes = Router();

routes.use(authRoutes);
routes.use(saldoRoutes);

export { routes };
