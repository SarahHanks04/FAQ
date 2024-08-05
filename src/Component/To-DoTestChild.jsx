import React from "react";

const TodoChild = (props) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 p-4 rounded mb-2">
      <div className="flex justify-between">
        <div className="flex justify-between space-x-24">
          <p className="text-lg">{props.grocery}</p>
          <p className="text-sm text-gray-600">{props.price}</p>

          <button onClick={() => props.deleteGrocery(props.id)} className="text-red-500">
          &#10761;
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default TodoChild;
