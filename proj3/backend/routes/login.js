import express from "express";
import { Router } from "express";

const router = Router();

router.get("/login", (req, res, next) =>
    res.send("<h1>this is login page</h1>")
);

export  default router ;
