import { getDB } from '../models/db.js';

export async function saveSimulation(req, res) {
  const { form, result } = req.body;

  if (!form || !result) {
    return res.status(400).json({ error: 'Missing form or result' });
  }

  try {
    const db = getDB();
    await db.collection('simulations').insertOne({
      form,
      result,
      created_at: new Date(),
    });
    res.status(201).json({ message: 'Simulation saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

import { Simulation } from '../models/Simulation.js';

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
