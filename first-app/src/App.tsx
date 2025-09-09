import React from 'react';
import UserProfileCard from './components/UserProfileCard';
import { users } from './data/users';

export default function App() {
  const handleViewDetails = (userId: string | number) => {
    console.log('Viewing details for user ID:', userId);
    alert(`Viewing details for user ID: ${userId}`);
  };

  return (
    <main className="page">
      <h1 className="title">User Profile Cards</h1>

      <div className="grid">
        {users.map((u) => (
          <UserProfileCard key={u.id} user={u} onViewDetails={handleViewDetails} />
        ))}
      </div>
    </main>
  );
}
