import express from 'express';
import { saveSimulation } from '../controllers/simulationController.js';

const router = express.Router();
router.post('/simulate', saveSimulation);
export default router;
