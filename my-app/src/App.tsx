import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import DisciplineQuestions from './components/DisciplineQuestions';
import './App.css';

const App: React.FC = () => {
  const [disciplines, setDisciplines] = useState([]);

  useEffect(() => {
    const fetchDisciplines = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/disciplines');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDisciplines(data);
      } catch (error) {
        console.error('Failed to fetch disciplines:', error);
      }
    };

    fetchDisciplines();
  }, []);

  return (
    <div className="App">
      <Header />
      <DisciplineQuestions disciplines={disciplines} />
    </div>
  );
};

export default App;
