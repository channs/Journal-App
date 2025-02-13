import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

console.log('Using API URL:', API_URL); // For debugging

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const entriesApi = {
  getAll: async () => {
    const response = await api.get('/entries');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/entries/${id}`);
    return response.data;
  },

  create: async (entry) => {
    const response = await api.post('/entries', entry);
    return response.data;
  },
};

export default api;
