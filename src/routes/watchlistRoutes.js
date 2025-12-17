import express from 'express';
import {addToWatchlist} from '../controllers/watchListController.js'

const router = express.Router();

router.post("/", addToWatchlist);

export default router;