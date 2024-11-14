import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import Quiz from '../components/Quiz';
import LearningResources from '../components/LearningResources';

const WorkshopDetail = ({ workshops, updateWorkshop }) => {
  const { id } = useParams();
  const workshop = workshops.find(w => w.id === parseInt(id));

  if (!workshop) {
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Workshop tidak ditemukan</h2>
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const handleAddResource = (newResource) => {
    const updatedWorkshop = {
      ...workshop,
      resources: [...(workshop.resources || []), newResource]
    };
    updateWorkshop(updatedWorkshop);
  };

  const handleDeleteResource = (index) => {
    const updatedResources = [...(workshop.resources || [])];
    updatedResources.splice(index, 1);
    const updatedWorkshop = {
      ...workshop,
      resources: updatedResources
    };
    updateWorkshop(updatedWorkshop);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Link 
        to="/" 
        className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Dashboard
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{workshop.title}</span>
            <span className="text-sm text-gray-500">{workshop.date}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Catatan:</h3>
            <p className="text-gray-600 whitespace-pre-wrap">{workshop.notes}</p>
          </div>

          <LearningResources
            resources={workshop.resources || []}
            onAddResource={handleAddResource}
            onDeleteResource={handleDeleteResource}
          />

          {workshop.quiz && workshop.quiz.length > 0 && (
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Quiz</h3>
              <Quiz quiz={workshop.quiz} workshopId={workshop.id} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkshopDetail;