import React from 'react';

const Button = ({ onClick }) => {
  return (
    <div className="mt-8">
      <button
        onClick={onClick}
        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        New Advice
      </button>
    </div>
  );
};

export default Button;
