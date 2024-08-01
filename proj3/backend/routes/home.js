import express from "express";
import { Router } from "express";

const router = Router();

router.get("/home", (req, res, next) => res.send("<h1>this is home page</h1>"));

export default router;
