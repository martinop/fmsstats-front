import React from 'react';
import Box from './Box';

function App() {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Tailwind
        </h1>
        <p className="text-red-500">
          Tailwind x2
        </p>
        <Box>
          <h4>Hi</h4>
        </Box>
      </div>
    </div>
  );
}

export default App;
