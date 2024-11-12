// components/ProfileCard.jsx

import React from 'react';

const ProfileCard = ({ avatar, name, occupation, hobbies }) => {
  return (
    <div style={styles.card}>
      <img src={avatar} alt={`${name} avatar`} style={styles.avatar} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.occupation}>{occupation}</p>
      <p style={styles.hobbies}>
        <strong>Hobbies:</strong> {hobbies.join(', ')}
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '250px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '12px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '8px 0',
  },
  occupation: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
  },
  hobbies: {
    fontSize: '14px',
    color: '#333',
  },
};

export default ProfileCard;
