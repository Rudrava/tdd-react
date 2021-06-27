import React, { useState } from "react";
import { Button, Row, Col, Modal } from "react-materialize";
import NewRestrauntForm from "../components/NewRestrauntForm";
import RestaurantList from "../components/RestrauntList";

const RestrauntListPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const onSave = (newRestrauntName) => {
    setModalOpen(false);
    setRestaurants((r) => [...r, newRestrauntName]);
  };

  return (
    <>
      <Row>
        <Button
          className="modal-trigger"
          href="#newRestaurantModal"
          node="button"
          data-test="addRestrauntButton"
        >
          Add Restaurant
        </Button>
      </Row>
      <Modal
        id="newRestaurantModal"
        header="New Restaurant"
        open={modalOpen}
        options={{
          onCloseEnd: () => {
            document
              .getElementById("newRestaurantModal")
              .querySelector("#newRestaunrantNameField").value = "";
          },
          onOpenEnd: () => {
            document.querySelector("input").focus();
          },
        }}
      >
        <Row>
          <NewRestrauntForm onSave={onSave} />
        </Row>
      </Modal>
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default RestrauntListPage;
