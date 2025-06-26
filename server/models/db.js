import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

export async function connectToDB() {
  try {
    await client.connect();
    db = client.db('blushnbloom'); // nome do banco
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
  }
}

export function getDB() {
  return db;
}
