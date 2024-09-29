import React, { useState } from 'react';
import QuestionDetails from './QuestionDetails';

interface Question {
  id: number;
  title: string;
}

interface Discipline {
  id: number;
  name: string;
  questions: Question[];
}

interface DisciplineQuestionsProps {
  disciplines: Discipline[];
}

const DisciplineQuestions: React.FC<DisciplineQuestionsProps> = ({ disciplines }) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(null);

  const handleQuestionClick = (questionId: number) => {
    setSelectedQuestionId(questionId);
  };

  const handleCloseDetails = () => {
    setSelectedQuestionId(null);
  };

  return (
    <div className="questions-container">
      <h2>Questões por Disciplina</h2>
      {disciplines.map((discipline) => (
        <div key={discipline.id} className="discipline-section">
          <h3>{discipline.name}</h3>
          <ul className="questions-list">
            {discipline.questions.map((question) => (
              <li key={question.id}>
                <button onClick={() => handleQuestionClick(question.id)}>
                  {question.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {selectedQuestionId && (
        <QuestionDetails 
          questionId={selectedQuestionId}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default DisciplineQuestions;