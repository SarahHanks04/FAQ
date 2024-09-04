import React, { useEffect, useState } from "react";
import Quote from "./Quote";
import Button from "./Button";

const AdviceBox = () => {
  const [advice, setAdvice] = useState("");
  const [showAdvice, setShowAdvice] = useState(false);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      console.log(data);
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleButton = () => {
    setShowAdvice(true);
    fetchAdvice();
  };

  return (

    <div>
      <div>
        {showAdvice && <Quote advice={advice} />}
         <Button onClick={handleButton} />
      </div>
    </div>
  );
};

export default AdviceBox;
