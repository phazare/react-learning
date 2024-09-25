import Items from "./Items";
import { useContext } from "react";
import { FoodItemContext } from "../../store/food-item-context";
const FoodItems = () => {
  const foodContext = useContext(FoodItemContext);
  const foodItem = foodContext.foodItems
  return (
    <ul className="list-group">
      {foodItem.map((item) => (
        <Items key={item} item = {item}></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
