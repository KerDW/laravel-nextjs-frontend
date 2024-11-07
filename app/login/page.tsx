// pages/login.tsx
'use client';

import { useState } from 'react';
import apiClient from '../utils/api';
import { getCsrfToken } from '../utils/csrf';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await getCsrfToken();
    try {
      await apiClient.post('login', { email, password });
      alert('login successful');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
