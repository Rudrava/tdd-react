import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const RestaurantList = ({ restaurants }) => {
  return (
    <>
      <Collection header="Restaurants">
        {restaurants.length !== 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantName
              key={Math.round(Math.random() * 100000)}
              name={restaurant}
            />
          ))
        ) : (
          <NoRestaurant />
        )}
      </Collection>
    </>
  );
};

const NoRestaurant = () => (
  <CollectionItem data-test="no-restaurant-message" style={{ color: "gray" }}>
    none added yet
  </CollectionItem>
);
const RestaurantName = ({ name }) => <CollectionItem>{name}</CollectionItem>;

export default RestaurantList;
