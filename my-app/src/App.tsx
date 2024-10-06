import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DisciplineQuestions from './components/DisciplineQuestions';
import './App.css';
import Login from './components/Login';

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
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<DisciplineQuestions disciplines={disciplines} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
