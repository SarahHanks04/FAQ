import React, { useContext } from 'react';
import { CardContext } from '../Context/CardContext';

const CardDetails = () => {
  const { atmData } = useContext(CardContext);

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl pb-6">CARD DETAILS</h1>
      <p>Name: {atmData.name}</p>
      <p>Serial Number: {atmData.serialNumber}</p>
      <p>Date: {atmData.date}</p>
    </div>
  );
};

export default CardDetails;
