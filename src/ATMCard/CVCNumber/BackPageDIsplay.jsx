import React, { useContext } from 'react';
import { CardContext } from '../Context/CardContext';

const BackPageDIsplay = () => {
  const { atmData } = useContext(CardContext);

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">CVC NUMBER</h1>
      <p>{atmData.cvc}</p>
    </div>
  );
  
};

export default BackPageDIsplay;
