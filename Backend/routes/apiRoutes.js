import express from 'express';
import { getResults } from '../controllers/resultController.js';

const router = express.Router();

// Route to fetch results
router.get('/results', getResults);

export default router;