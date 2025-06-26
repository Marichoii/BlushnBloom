import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import simulationRoutes from './routes/simulationRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', simulationRoutes);

app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
