import React, { useEffect, useState } from 'react';

interface QuestionDetailsProps {
  questionId: number | null;
  onClose: () => void;
}

interface QuestionDetails {
  id: number;
  title: string;
  content: string;
  answer: string;
  image: string;
  professorId?: number | null;
  studentId?: number;
  disciplineId: number;
}

const QuestionDetails: React.FC<QuestionDetailsProps> = ({ questionId, onClose }) => {
  const [questionDetails, setQuestionDetails] = useState<QuestionDetails | null>(null);

  useEffect(() => {
    const fetchQuestionDetails = async () => {
      if (questionId !== null) {
        try {
          const response = await fetch(`http://localhost:3000/api/questions/${questionId}`);
          if (!response.ok) {
            throw new Error('Erro ao buscar a questão');
          }
          const data = await response.json();

          const imageBase64 = `data:image/png;base64,${btoa(
            new Uint8Array(data.image.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
          )}`;

          setQuestionDetails({
            id: data.id,
            title: data.title,
            content: data.content,
            answer: data.answer,
            image: imageBase64,
            professorId: data.professorId,
            studentId: data.studentId,
            disciplineId: data.disciplineId,
          });
        } catch (error) {
          console.error('Falha ao buscar detalhes da questão:', error);
          setQuestionDetails(null);
        }
      }
    };

    fetchQuestionDetails();
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
