import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import UserInput from "./components/UserInput";
import EmptyFoodList from "./components/EmptyFoodList";
import { useState } from "react";
import { FoodItemContext } from "../store/food-item-context";

function ContextAPI ()  {
  let [foodItems, setFoodItems] = useState([]);
  const addFood = (event) => {
    if (event.key === "Enter") {
      const newFoodItems = [...foodItems, event.target.value];
      setFoodItems(newFoodItems);
      event.target.value = "";
    }
  };
  const deleteFood = (data) => {
    const newFoodItems = foodItems.filter((x) => x != data);
    setFoodItems(newFoodItems);
  };
  const shareList = () => {
    if (foodItems.length > 0) {
      const msg = `Grocery list\n${foodItems.join("\n")}`;

      const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;

      window.open(url, "_blank");
    }
  };
  return (
    <FoodItemContext.Provider
      value={{
        foodItems,
        addFood,
        deleteFood,
      }}
    >
      <Container>
        <EmptyFoodList></EmptyFoodList>
        <h5 className="text-center mb-3"> Create grocery list</h5>
        <UserInput></UserInput>
        <FoodItems></FoodItems>
        <button className="btn btn-success mt-3 float-end" onClick={shareList}>
          Share
        </button>
      </Container>
    </FoodItemContext.Provider>
  );
};
export default ContextAPI;
