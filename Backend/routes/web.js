import express from 'express'
import UsuarioController from '../controllers/usuariosController.js'
import MusicController from '../controllers/musicController.js'
import UsuarioEliminadoController from '../controllers/usuarioseliminadosController.js'

const router = express.Router()

router.get('/usuarios', UsuarioController.getAllDocc)
router.post('/usuarios', UsuarioController.create)
router.put('/usuarios', UsuarioController.update)
router.delete('/usuarios/:id', UsuarioController.delete)
router.get('/usuarioseliminados', UsuarioEliminadoController.getAllDoc)
router.post('/usuarioseliminados', UsuarioEliminadoController.create)
router.post('/music', MusicController.find)
router.get('/music', MusicController.getAllDoc)

export default router
