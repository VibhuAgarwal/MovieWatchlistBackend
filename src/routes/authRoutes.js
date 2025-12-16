import express from 'express';
import { register } from '../controllers/authController.js';
import { findUserByEmail } from "../controllers/findController.js";

const router = express.Router();

router.get("/find-user", findUserByEmail);
router.post('/register', register);


export default router;