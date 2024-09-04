import React from 'react';

const Quote = ({ advice }) => {
  return (
    <div>
      
      <blockquote>
        {advice}
      </blockquote>
    </div>
  );
};

export default Quote;

