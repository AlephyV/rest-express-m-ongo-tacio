import express from "express";
import ClientController from "../controllers/clientController.js";

const router = express.Router();

router
    .get("/client", ClientController.listarClients)
    .get("/client/:id", ClientController.listarClientsPorId)
    .post("/client", ClientController.cadastrarClient)
    .put("/client/:id", ClientController.atualizarClient)
    .delete("/client/:id", ClientController.DeleteClient)

export default router;