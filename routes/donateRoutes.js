import express from "express";
import DonateController from "../controllers/donateController.js";

const router = express.Router();

router
    .get("/donate", DonateController.listarDonates)
    .get("/donate/:id", DonateController.listarDonatesPorId)
    .post("/donate", DonateController.cadastrarDonate)
    .put("/donate/:id", DonateController.atualizarDonate)
    .delete("/donate/:id", DonateController.DeleteDonate)

export default router;