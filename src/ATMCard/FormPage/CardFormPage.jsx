import React, { useContext } from "react";
import { CardContext } from "../Context/CardContext";

const CardFormPage = () => {
  const { setAtmData } = useContext(CardContext);

  const AddDetails = (e) => {
    const { name, value } = e.target;
    setAtmData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    alert("Card Details Submitted!");
  };

  return (
    <div>
    <h1 className=" m-6 font-bold text-3xl">SARAH'S UBA ATM CARD</h1>
      <form className="p-4">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onInput={AddDetails}
            className="border rounded px-2 py-1"
          />
        </div>
        <br />
        <div>
          <label>Serial Number</label>
          <input
            type="text"
            name="serialNumber"
            onInput={AddDetails}
            className="border rounded px-2 py-1"
          />
        </div>
        <br />
        <div>
          <label>Date</label>
          <input
            type="text"
            name="date"
            onInput={AddDetails}
            className="border rounded px-2 py-1"
            placeholder="DD/MM/YY"
          />
        </div>
        <br />
        <div>
          <label>CVC</label>
          <input
            type="text"
            name="cvc"
            onInput={AddDetails}
            className="border rounded px-2 py-1"
          />
        </div>
        <br />
        <div className="mt-4">
          <button onClick={SubmitForm}
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardFormPage;
