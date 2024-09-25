import { useContext } from "react";
import { FoodItemContext } from "../../store/food-item-context";

const EmptyFoodList = () => {
  const foodContext = useContext(FoodItemContext);
  const foodItem = foodContext.foodItems

  return (
    foodItem.length === 0 && (
      <h4 className="text-center">You do not have grocery list!!</h4>
    )
  );
};

export default EmptyFoodList;
