import express from "express";
import UsuarioController from "../controllers/usuariosController.js";

const router = express.Router();

router.get("/usuarios", UsuarioController.getAllDocc);

export default router;
