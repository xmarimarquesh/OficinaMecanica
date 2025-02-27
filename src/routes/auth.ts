import express, { Request, Response, Router } from 'express';
// import Auth from '../models/Auth.ts';
const router: Router = express.Router();
import AuthController from '../controllers/AuthController.ts'
import { validateLogin, validateRegister } from '../middleware/AuthMiddleware.ts';

// REQUISIÇÃO COM MODELS

// router.post("/register", AuthController.register);
// router.post("/login", AuthController.login);
router.post('/register', validateRegister, AuthController.register);
router.post('/login', validateLogin, AuthController.login);

export default router;