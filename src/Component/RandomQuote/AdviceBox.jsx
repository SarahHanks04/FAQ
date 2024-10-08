import React, { useEffect, useState } from "react";
import Quote from "./Quote";
import Button from "./Button";
import axios from "axios";

const AdviceBox = () => {
  const [advice, setAdvice] = useState("");
  const [showAdvice, setShowAdvice] = useState(false);

  // const fetchAdvice = async () => {
  //   try {
  //     const response = await fetch("https://api.adviceslip.com/advice");
  //     const data = await response.json();
  //     console.log(data);
  //     setAdvice(data.slip.advice);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // Fetch data with axios
  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const data = await response.data;
      console.log(data);
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("Error Fetching Advice:", error);
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
