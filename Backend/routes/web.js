import express from "express";
import UsuarioController from "../controllers/usuariosController.js";
import MusicController from "../controllers/musicController.js";

const router = express.Router();

router.get("/music", MusicController.getAllDoc);
router.get("/usuarios", UsuarioController.getAllDocc);

export default router;
