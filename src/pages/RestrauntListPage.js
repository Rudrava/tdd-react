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
  console.log(modalOpen);

  return (
    <>
      <Row>
        <Button
          className="modal-trigger"
          href="#modal1"
          node="button"
          // onClick={() => setModalOpen(true)}
          data-test="addRestrauntButton"
        >
          Add Restaurant
        </Button>
      </Row>
      <Modal id="modal1" header="New Restaurant" open={modalOpen}>
        <Row>
          <NewRestrauntForm onSave={onSave} />
        </Row>
      </Modal>
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default RestrauntListPage;
