// import React, { useState } from 'react';
// import { Plus, Trash2 } from 'lucide-react';
// import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

// const QuizManager = ({ quiz = [], onUpdateQuiz }) => {
//   const [newQuestion, setNewQuestion] = useState({
//     question: '',
//     options: ['', '', '', ''],
//     correct: 0
//   });

//   const handleOptionChange = (index, value) => {
//     const newOptions = [...newQuestion.options];
//     newOptions[index] = value;
//     setNewQuestion({ ...newQuestion, options: newOptions });
//   };

//   const handleAddQuestion = () => {
//     if (newQuestion.question && newQuestion.options.every(opt => opt.trim() !== '')) {
//       onUpdateQuiz([...quiz, newQuestion]);
//       setNewQuestion({
//         question: '',
//         options: ['', '', '', ''],
//         correct: 0
//       });
//     }
//   };

//   const handleDeleteQuestion = (index) => {
//     const updatedQuiz = quiz.filter((_, idx) => idx !== index);
//     onUpdateQuiz(updatedQuiz);
//   };

//   return (
//     <Card className="mt-6">
//       <CardHeader>
//         <CardTitle>Tambah Pertanyaan Quiz</CardTitle>
//       </CardHeader>
//       <CardContent>
//         {/* Form tambah pertanyaan */}
//         <div className="space-y-4 mb-8">
//           <div>
//             <label className="block text-sm font-medium mb-1">Pertanyaan:</label>
//             <textarea
//               value={newQuestion.question}
//               onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
//               className="w-full p-2 border rounded"
//               rows="2"
//               placeholder="Masukkan pertanyaan..."
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Pilihan Jawaban:</label>
//             <div className="space-y-2">
//               {newQuestion.options.map((option, index) => (
//                 <div key={index} className="flex gap-2 items-center">
//                   <input
//                     type="radio"
//                     name="correct"
//                     checked={newQuestion.correct === index}
//                     onChange={() => setNewQuestion({ ...newQuestion, correct: index })}
//                     className="mt-1"
//                   />
//                   <input
//                     type="text"
//                     value={option}
//                     onChange={(e) => handleOptionChange(index, e.target.value)}
//                     placeholder={`Pilihan ${index + 1}`}
//                     className="flex-1 p-2 border rounded"
//                   />
//                 </div>
//               ))}
//             </div>
//             <p className="text-sm text-gray-500 mt-1">
//               * Pilih radio button untuk jawaban yang benar
//             </p>
//           </div>

//           <button
//             onClick={handleAddQuestion}
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center gap-2"
//           >
//             <Plus className="w-4 h-4" />
//             Tambah Pertanyaan
//           </button>
//         </div>

//         {/* Daftar pertanyaan yang sudah ada */}
//         <div className="space-y-4">
//           <h3 className="font-semibold">Daftar Pertanyaan:</h3>
//           {quiz.map((q, index) => (
//             <div key={index} className="border rounded p-4">
//               <div className="flex justify-between items-start">
//                 <div className="flex-1">
//                   <p className="font-medium">{q.question}</p>
//                   <ul className="mt-2 space-y-1">
//                     {q.options.map((option, optIndex) => (
//                       <li 
//                         key={optIndex}
//                         className={optIndex === q.correct ? 'text-green-600 font-medium' : ''}
//                       >
//                         {optIndex + 1}. {option}
//                         {optIndex === q.correct && ' ✓'}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button
//                   onClick={() => handleDeleteQuestion(index)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <Trash2 className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           ))}
//           {quiz.length === 0 && (
//             <p className="text-gray-500 text-center py-4">
//               Belum ada pertanyaan quiz. Tambahkan yang pertama!
//             </p>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default QuizManager;