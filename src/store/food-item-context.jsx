import { createContext, useReducer } from "react";

export const FoodItemContext = createContext({
  foodItems: [],
  addFood: () => {},
  deleteFood: () => {},
});

const foodItemReducer = (currFoodItem, action) => {
  let newFoodItems = currFoodItem;
  if (action.type === "ADD_ITEM") {
    newFoodItems = [...currFoodItem, action.payload.itemName];
  } else if (action.type === "DELETE_ITEM") {
    newFoodItems = currFoodItem.filter((x) => x != action.payload.itemName);
  }
  return newFoodItems;
};

const FoodContext = ({children}) => {
  const [foodItems, dispatchFoodItem] = useReducer(foodItemReducer, []);
  const addFood = (event) => {
    if (event.key === "Enter") {
      const addAction = {
        type: "ADD_ITEM",
        payload: {
          itemName: event.target.value,
        },
      };
      dispatchFoodItem(addAction);
      event.target.value = "";
    }
  };
  const deleteFood = (data) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: data,
      },
    };
    dispatchFoodItem(deleteAction);
  };

  return (
    <FoodItemContext.Provider
      value={{
        foodItems,
        addFood,
        deleteFood,
      }}
    >
      {children}
    </FoodItemContext.Provider>
  );
};

export default FoodContext;
