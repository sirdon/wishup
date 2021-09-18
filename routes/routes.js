import express from "express";
const routes = express.Router();
import userRoutes from "../wishup-api/user/route.js";
import subscriptionRoutes from "../wishup-api/subscription/route.js";
/***@User Routes */
routes.use(userRoutes);
/***@Subscription Routes */
routes.use(subscriptionRoutes);

export default routes;
