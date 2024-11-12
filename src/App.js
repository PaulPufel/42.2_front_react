import React from 'react';
import ProfileCard from './components/ProfileCard';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
      <ProfileCard
        avatar="https://via.placeholder.com/100"
        name="John Doe"
        occupation="Software Engineer"
        hobbies={['Coding', 'Reading', 'Traveling']}
      />
      <ProfileCard
        avatar="https://via.placeholder.com/100"
        name="Jane Smith"
        occupation="Graphic Designer"
        hobbies={['Drawing', 'Photography', 'Music']}
      />
      <ProfileCard
        avatar="https://via.placeholder.com/100"
        name="Emily Johnson"
        occupation="Data Analyst"
        hobbies={['Statistics', 'Yoga', 'Running']}
      />
    </div>
  );
};

export default App;

