import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const WorkshopForm = ({ onAddWorkshop }) => {
  const [newWorkshop, setNewWorkshop] = useState({
    title: '',
    date: '',
    notes: ''
  });

  const handleSubmit = () => {
    if (newWorkshop.title && newWorkshop.date && newWorkshop.notes) {
      onAddWorkshop(newWorkshop);
      setNewWorkshop({ title: '', date: '', notes: '' });
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Tambah Workshop Baru</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Judul Workshop"
            className="w-full p-2 border rounded"
            value={newWorkshop.title}
            onChange={(e) => setNewWorkshop({...newWorkshop, title: e.target.value})}
          />
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={newWorkshop.date}
            onChange={(e) => setNewWorkshop({...newWorkshop, date: e.target.value})}
          />
          <textarea
            placeholder="Catatan Workshop"
            className="w-full p-2 border rounded"
            rows="3"
            value={newWorkshop.notes}
            onChange={(e) => setNewWorkshop({...newWorkshop, notes: e.target.value})}
          />
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            <Plus className="w-4 h-4" />
            Tambah Workshop
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkshopForm;