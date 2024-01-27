import { Router } from "express";
import UserController from '../controllers/users.controller.js';

const router = Router()

router.post('/user', UserController.criaNivel)
router.get('/user', UserController.pegarTodasAsNiveis)
router.get('/user/:id', UserController.pegarUmaNivel)
router.put('/user/:id', UserController.atualizarNivel)
router.delete('/user/:id', UserController.deletarNivel)

export default router