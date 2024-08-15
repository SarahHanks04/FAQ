import { createContext, useState } from 'react';

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
    
  const [atmData, setAtmData] = useState({
    name: "",
    serialNumber: "",
    date: "",
    cvc: "",
  });

  return (
    
    <CardContext.Provider value={{atmData, setAtmData}}>
        {children}
    </CardContext.Provider>
  );

};

export default CardContextProvider;