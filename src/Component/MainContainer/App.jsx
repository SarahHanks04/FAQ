import React, { useContext } from "react";
import AboutPage from "../UseContex/Pages/Aboutpage";
import PageContextProvider, { PageContext } from "../UseContex/Context/PageContextProvider";

const MainContainer = () => {
 const allValues = useContext(PageContext)
 console.log(allValues)
  return (
    
      <div>
        <AboutPage />
      </div>
    
  );
};

export default MainContainer;
