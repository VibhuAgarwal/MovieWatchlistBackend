import express from 'express';
import { register, login, logout } from '../controllers/authController.js';
import { findUserByEmail } from "../controllers/findController.js";

const router = express.Router();

router.get("/find-user", findUserByEmail);
router.post('/register', register);
router.post('/login', login)
router.post('/logout', logout)


export default router;