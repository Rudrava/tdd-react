import React, { useState } from "react";

const NewRestrauntForm = ({ onSave }) => {
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSave = (e) => {
    console.log(inputText);
    onSave(inputText);
  };
  return (
    <div>
      <input
        type="text"
        data-test="newRestrauntName"
        value={inputText}
        onChange={handleChange}
      />
      <button data-test="saveNewRestrauntButton" onClick={handleSave}>
        Save Restaurant
      </button>
    </div>
  );
};

export default NewRestrauntForm;
