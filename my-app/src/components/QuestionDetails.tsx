import React, { useEffect, useState } from 'react';

interface QuestionDetailsProps {
  questionId: number | null;
  onClose: () => void;
}

interface QuestionDetails {
  title: string;
  content: string;
  answer: string;
  image: string;
  professorId?: number;
  studentId?: number;
  disciplineId: number;
}

const mockQuestions: { [key: number]: QuestionDetails } = {
  1: {
    title: 'Questão de Matemática',
    content: 'Calcule a integral de x^2.',
    answer: 'A resposta é x^3/3 + C.',
    image: 'https://via.placeholder.com/150',
    disciplineId: 1,
    professorId: 101,
  },
  2: {
    title: 'Questão de Física',
    content: 'Explique o conceito de gravidade.',
    answer: 'A gravidade é uma força que atrai objetos com massa.',
    image: 'https://via.placeholder.com/150',
    disciplineId: 2,
    professorId: 102,
  },
};

const QuestionDetails: React.FC<QuestionDetailsProps> = ({ questionId, onClose }) => {
  const [questionDetails, setQuestionDetails] = useState<QuestionDetails | null>(null);

  useEffect(() => {
    if (questionId !== null) {
      setQuestionDetails(mockQuestions[questionId] || null);
    }
  }, [questionId]);

  if (!questionDetails) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{questionDetails.title}</h2>
        <p>{questionDetails.content}</p>
        <p><strong>Resposta:</strong> {questionDetails.answer}</p>
        {questionDetails.image && <img src={questionDetails.image} alt="Imagem da questão" />}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default QuestionDetails;
