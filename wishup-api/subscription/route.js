import express from "express";
const subscriptionRoutes = express.Router();
import { get, getUser } from "./get.js";
import post from "./post.js";
subscriptionRoutes.get("/subscription/:username", get);
subscriptionRoutes.get("/subscription/:username/:date", getUser);
subscriptionRoutes.post("/subscription", post);

export default subscriptionRoutes;
