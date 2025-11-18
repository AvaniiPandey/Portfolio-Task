import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const projectAPI = {
  getAll: () => api.get('/projects'),
  create: (formData) => api.post('/projects', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  delete: (id) => api.delete(`/projects/${id}`)
};

export const clientAPI = {
  getAll: () => api.get('/clients'),
  create: (formData) => api.post('/clients', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  delete: (id) => api.delete(`/clients/${id}`)
};

export const contactAPI = {
  getAll: () => api.get('/contacts'),
  create: (data) => api.post('/contacts', data)
};

export const newsletterAPI = {
  getAll: () => api.get('/newsletter'),
  subscribe: (email) => api.post('/newsletter', { email })
};

export default api;