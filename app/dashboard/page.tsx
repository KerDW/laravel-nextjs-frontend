// dashboard.tsx
'use client';
import { useEffect } from 'react';

const Dashboard = () => {

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }

      try {
        const response = await fetch('http://localhost/api/targets', {
          method: 'GET', // or 'GET', depending on your API
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          // body: JSON.stringify({ /* your data */ }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch protected data');
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error fetching protected data:', error);
      }
    };

    fetchProtectedData();
  }, []);

};

export default Dashboard;