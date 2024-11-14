import React, { useState } from 'react';
import { Plus, Link as LinkIcon, Trash2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const LearningResources = ({ resources, onAddResource, onDeleteResource }) => {
  const [newResource, setNewResource] = useState({ title: '', url: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newResource.title && newResource.url) {
      onAddResource(newResource);
      setNewResource({ title: '', url: '' });
    }
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LinkIcon className="w-5 h-5" />
          Learning Resources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Judul Resource"
              className="flex-1 p-2 border rounded"
              value={newResource.title}
              onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
            />
            <input
              type="url"
              placeholder="URL"
              className="flex-1 p-2 border rounded"
              value={newResource.url}
              onChange={(e) => setNewResource({ ...newResource, url: e.target.value })}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Tambah
            </button>
          </div>
        </form>

        <div className="space-y-2">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100"
            >
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-blue-600 hover:text-blue-800"
              >
                {resource.title}
              </a>
              <button
                onClick={() => onDeleteResource(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          {resources.length === 0 && (
            <p className="text-gray-500 text-center py-4">
              Belum ada learning resources. Tambahkan yang pertama!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningResources;