"use client";
import { ChangeEvent, FC, useState } from "react";
import { addSpecialty } from "@/actions/specialty";

const AddSpecialty = () => {
  // State for handling input value
  const [input, setInput] = useState("");

  // Event handler for input change
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    addSpecialty(input);
    setInput("");
  };
  console.log(input);

  // Rendering the AddSpecialty component
  return (
    <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center p-16">
      <div className="text-5xl font-medium text-center">
        Agregar Especialidad
      </div>
      <div className="w-full flex flex-col mt-8 gap-2">
        {/* Mapping through todoItems and rendering Todo component for each */}

        <div className="w-full flex gap-1 mt-2">
          {/* Input field for entering new todo text */}
          <input
            type="text"
            className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
            onChange={handleInput}
            value={input}
          />
          {/* Button for adding a new todo */}
          <button
            className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 py-1"
            onClick={handleAdd}
          >
            Agregar
          </button>
        </div>
      </div>
    </main>
  );
};

export default AddSpecialty;
