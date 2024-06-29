import React from 'react';
import ReactDOM from 'react-dom/client';

import Weather from './components/weather';// Add this line to include Tailwind CSS


const MyApp = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <Weather />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);
