// dashboard.tsx
'use client';

import React, { useEffect, useState } from 'react';
import apiClient from '../utils/api';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);

  type User = {
  id: number;
  name: string;
  email: string;
}

  useEffect(() => {
    apiClient.get('user')
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Not authenticated:', error);
      });
    }, []);
  if (!user) {
    return <p>Loading...</p>;
  }

  return <div>Welcome, {user.name}!</div>;
};

export default Dashboard;