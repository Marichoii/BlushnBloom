import express from 'express';
import { saveSimulation, getSimulations } from '../controllers/simulationController.js';

const router = express.Router();

router.post('/simulate', saveSimulation);
router.get('/simulations', getSimulations);

export default router;
