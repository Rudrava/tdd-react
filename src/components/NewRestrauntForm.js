import React, { useState } from "react";
import { Button, Row, TextInput } from "react-materialize";

const NewRestrauntForm = ({ onSave }) => {
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <Row>
        <TextInput
          s={12}
          m={12}
          l={12}
          label="Restaurant Name"
          type="text"
          data-test="newRestrauntName"
          value={inputText}
          onChange={handleChange}
        />
      </Row>

      <div className="modal-footer">
        <Button
          s={12}
          m={12}
          l={12}
          data-test="saveNewRestrauntButton"
          onClick={() => {
            onSave(inputText);
            setInputText("");
          }}
          className="modal-close"
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default NewRestrauntForm;
