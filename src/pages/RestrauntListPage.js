import React, { useState } from "react";
import NewRestrauntForm from "../components/NewRestrauntForm";
import RestaurantList from "../components/RestrauntList";

const RestrauntListPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const onSave = (newRestrauntName) => {
    setRestaurants((r) => [...r, newRestrauntName]);
  };
  return (
    <>
      <button data-test="addRestrauntButton">Add Restaurant</button>
      <NewRestrauntForm onSave={onSave} />
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default RestrauntListPage;
