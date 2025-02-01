import express from 'express';
import { formularioLogin,formularioRegistro,formularioOlvidePassword,registrar } from '../controllers/usuarioController.js';

const router=express.Router();

//Inicio de sesión
router.get('/login',formularioLogin)

//Crear cuenta
router.get('/registro',formularioRegistro)
router.post('/registro',registrar)

//Recuperación de contraseña
router.get('/olvide-password',formularioOlvidePassword)




export default router;