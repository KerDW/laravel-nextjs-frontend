// utils/csrf.ts
import apiClient from './api';

export const getCsrfToken = () => apiClient.get('/sanctum/csrf-cookie', { withCredentials: true });