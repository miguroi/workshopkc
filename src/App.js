import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import WorkshopForm from './components/WorkshopForm';
import WorkshopCard from './components/WorkshopCard';
import WorkshopDetail from './pages/WorkshopDetail';
import { initialWorkshops } from './data/initialWorkshops';

const Dashboard = ({ workshops, onAddWorkshop }) => (
  <div className="container mx-auto p-4 max-w-4xl">
    <header className="mb-8">
      <h1 className="text-3xl font-bold flex items-center gap-2 mb-2">
        <BookOpen className="w-8 h-8" />
        Deep Learning Workshop Notes
      </h1>
      <p className="text-gray-600">Catat dan uji pemahaman Anda tentang materi workshop</p>
    </header>

    <WorkshopForm onAddWorkshop={onAddWorkshop} />

    <div className="space-y-4">
      {workshops.map(workshop => (
        <WorkshopCard key={workshop.id} workshop={workshop} />
      ))}
    </div>
  </div>
);

const App = () => {
  const [workshops, setWorkshops] = useState(() => {
    const savedWorkshops = localStorage.getItem('workshops');
    return savedWorkshops ? JSON.parse(savedWorkshops) : initialWorkshops;
  });

  useEffect(() => {
    localStorage.setItem('workshops', JSON.stringify(workshops));
  }, [workshops]);

  const handleAddWorkshop = (newWorkshop) => {
    setWorkshops([...workshops, {
      id: workshops.length + 1,
      ...newWorkshop,
      resources: [],
      quiz: []
    }]);
  };

  const updateWorkshop = (updatedWorkshop) => {
    setWorkshops(workshops.map(w => 
      w.id === updatedWorkshop.id ? updatedWorkshop : w
    ));
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Dashboard workshops={workshops} onAddWorkshop={handleAddWorkshop} />} 
      />
      <Route 
        path="/workshop/:id" 
        element={<WorkshopDetail workshops={workshops} updateWorkshop={updateWorkshop} />} 
      />
    </Routes>
  );
};

export default App;