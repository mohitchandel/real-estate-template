// components/TasksSection.tsx
import React from 'react';

const TasksSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold text-indigo-900 mb-4">Tasks</h2>
      <ul className="list-disc list-inside">
        <li>Update property details</li>
        <li>Schedule property viewing</li>
        <li>Review customer feedback</li>
        {/* Add more tasks here */}
      </ul>
    </div>
  );
};

export default TasksSection;
