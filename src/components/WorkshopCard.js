import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { ChevronRight, Link as LinkIcon } from 'lucide-react';

const WorkshopCard = ({ workshop }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Link to={`/workshop/${workshop.id}`}>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{workshop.title}</span>
            <span className="text-sm text-gray-500">{workshop.date}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Catatan:</h3>
            <p className="text-gray-600 line-clamp-3">{workshop.notes}</p>
          </div>

          <div className="flex justify-between items-center mt-4 text-gray-500">
            <div className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4" />
              <span>{workshop.resources?.length || 0} resources</span>
            </div>
            <div className="flex items-center text-blue-500 hover:text-blue-700">
              Lihat Detail
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default WorkshopCard;