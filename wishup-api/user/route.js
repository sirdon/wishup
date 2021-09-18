import express from "express";
const userRoutes = express.Router();
import get from "./get.js";
import put from "./put.js";
userRoutes.get("/user/:username", get);
userRoutes.put("/user/:username", put);
export default userRoutes;
