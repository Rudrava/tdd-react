import React from "react";

const RestaurantList = ({ restaurants }) => {
  return (
    <>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={Math.round(Math.random() * 100)}>{restaurant}</li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantList;
