import { useContext } from "react";
import css from "./Items.module.css"
import { FoodItemContext } from "../../store/food-item-context";
const Items = ({item}) => {
  const {deleteFood} = useContext(FoodItemContext);
  return (
    <li className={`list-group-item`}>
      <span className={`${css["item-list"]}`}>{item}</span>
      <span className={`${css.cancel}`} onClick={() => deleteFood(item)}>X</span>
    </li>
  );
};
export default Items;
