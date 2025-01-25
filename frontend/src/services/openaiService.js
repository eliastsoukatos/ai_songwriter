import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Cambia esto cuando tengas el backend listo.

export const getAIResponse = async (prompt) => {
  try {
    const response = await axios.post(`${API_URL}/api/openai`, { prompt });
    return response.data;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    throw error;
  }
};
