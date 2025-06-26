import { Simulation } from '../models/Simulation.js';

// Salva uma nova simulação
export async function saveSimulation(req, res) {
  const { form, result } = req.body;

  if (!form || !result) {
    return res.status(400).json({ error: 'Missing data' });
  }

  try {
    const sim = new Simulation({ form, result });
    await sim.save();
    res.status(201).json({ message: 'Simulation saved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Lista as últimas 10 simulações
export async function getSimulations(req, res) {
  try {
    const simulations = await Simulation.find()
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(simulations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
