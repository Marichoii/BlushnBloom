import mongoose from 'mongoose';

const simulationSchema = new mongoose.Schema({
  form: { type: Object, required: true },
  result: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Simulation = mongoose.model('Simulation', simulationSchema);
