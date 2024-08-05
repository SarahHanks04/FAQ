import React, { useEffect, useState } from "react";
import TodoChild from "./To-DoTestChild";

const TodoParent = () => {
  const [groceries, setGroceries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [grocery, setGrocery] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);

  function addGrocery() {
    if (grocery && price) {
      const newGrocery = { id: Date.now(), grocery, price };

      setGroceries([...groceries, newGrocery]);
      setTotal(total + price);
      setGrocery("");
      setPrice("");
    }
  }

  function deleteGrocery(id) {
    const itemToDelete = groceries.find((item) => item.id === id);
    const updatedGroceries = groceries.filter((item) => item.id !== id);
    setGroceries(updatedGroceries)
    setTotal(total - itemToDelete.price)
  }
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 2000);
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="p-6">
      <div className="flex flex-col items-center">
        <div className="mb-4 flex space-x-2">
          <input
            type="text"
            value={grocery}
            onChange={(event) => setGrocery(event.target.value)}
            placeholder="Type grocery..."
            className="border p-2 rounded"
          />
          <input
           type="number"
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
            placeholder="Type price..."
            className="border p-2 rounded"
          />
        </div>
        <button
            onClick={addGrocery}
            className="bg-blue-500 text-white w-full p-2 rounded"
          >
            Add Grocery
          </button>
        <div className="w-full mb-4 flex justify-between">
          <h2 className="text-xl">Total</h2>
          <p>#{total}</p>
        </div>
        <div className="w-full">
          {groceries.map((item) => (
            <TodoChild
              price = {item.price}
              key={item.id}
              id={item.id}
              grocery={item.grocery}
              deleteGrocery={deleteGrocery}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default TodoParent;
