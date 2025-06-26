import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export async function saveSimulation(form, result) {
    const response = await axios.post(`${API_URL}/simulate`, { form, result });
    return response.data;
}

export async function getSimulations() {
    const response = await axios.get(`${API_URL}/simulations`);
    return response.data;
}
