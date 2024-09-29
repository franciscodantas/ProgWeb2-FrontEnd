import React from 'react';
import Header from './components/Header';
import DisciplineQuestions from './components/DisciplineQuestions';
import './App.css';

const App: React.FC = () => {
  const disciplines = [
    {
      id: 1,
      name: 'Matemática',
      questions: [
        { id: 1, title: 'Questão 1 de Matemática' },
        { id: 2, title: 'Questão 2 de Matemática' },
      ],
    },
    {
      id: 2,
      name: 'Física',
      questions: [
        { id: 3, title: 'Questão 1 de Física' },
        { id: 4, title: 'Questão 2 de Física' },
      ],
    },
    {
      id: 3,
      name: 'Química',
      questions: [
        { id: 5, title: 'Questão 1 de Química' },
        { id: 6, title: 'Questão 2 de Química' },
      ],
    },
  ];

  return (
    <div className="App">
      <Header />
      <DisciplineQuestions disciplines={disciplines} />
    </div>
  );
};

export default App;
