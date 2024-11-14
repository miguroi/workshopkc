import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

const Quiz = ({ quiz, workshopId }) => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setAnswers({
      ...answers,
      [`${workshopId}-${questionIndex}`]: answerIndex
    });
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.forEach((q, idx) => {
      if (answers[`${workshopId}-${idx}`] === q.correct) {
        correct++;
      }
    });
    return (correct / quiz.length) * 100;
  };

  if (!quiz.length) return null;

  return (
    <div className="mt-4">
      {quiz.map((q, qIdx) => (
        <div key={qIdx} className="mb-6">
          <p className="mb-2 font-medium">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, oIdx) => (
              <button
                key={oIdx}
                onClick={() => handleAnswerSelect(qIdx, oIdx)}
                className={`w-full text-left p-2 rounded ${
                  answers[`${workshopId}-${qIdx}`] === oIdx
                    ? 'bg-blue-100 border-blue-500'
                    : 'border hover:bg-gray-50'
                } border`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      
      {Object.keys(answers).length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setShowResults(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Lihat Hasil
          </button>
          
          {showResults && (
            <Alert className="mt-4">
              <AlertDescription>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Score Anda: {calculateScore()}%</span>
                  {calculateScore() >= 70 ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <X className="w-4 h-4 text-red-500" />
                  )}
                </div>
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;