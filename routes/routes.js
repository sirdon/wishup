import express from "express";
const routes = express.Router();
import userRoutes from "../wishup-api/user/route.js";
/***@User Routes */
routes.use(userRoutes);

export default routes;
