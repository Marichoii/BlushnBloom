import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose'; 
import cors from 'cors';
import './models/db.js';
import simulationRoutes from './routes/simulationRoutes.js';

console.log('🔍 MONGO_URI:', process.env.MONGO_URI);

const app = express();
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://blushnbloom_user:vXBuzc2cVZC7Fpzi@teste.cluster.mongodb.net/blushnbloom?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err));

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api', simulationRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
