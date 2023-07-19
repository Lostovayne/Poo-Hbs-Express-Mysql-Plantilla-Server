import { Router } from "express";
import { GetAllBases } from "../controllers/base.controller.js";

const router = Router();

router.get("/", GetAllBases);

router.post("/", (req, res) => {
    res.send("Ruta post");
});

router.put("/:id", (req, res) => {
    res.send("Ruta put");
});

router.delete("/:id", (req, res) => {
    res.send("Ruta delete");
});

export default router;
