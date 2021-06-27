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
          id="newRestaunrantNameField"
          data-test="newRestrauntName"
          value={inputText}
          onChange={handleChange}
        />
      </Row>

      <div className="modal-footer">
        <Button
          s={4}
          m={4}
          l={4}
          style={{ marginLeft: "1rem" }}
          data-test="saveNewRestrauntButton"
          onClick={() => {
            onSave(inputText);
            setInputText("");
          }}
          className="modal-close"
        >
          Save
        </Button>
        <Button
          s={4}
          m={4}
          l={4}
          data-test="cancelNewRestaurantForm"
          style={{ marginLeft: "1rem" }}
          className="modal-close"
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default NewRestrauntForm;
