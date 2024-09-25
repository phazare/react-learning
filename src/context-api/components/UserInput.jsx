import { useContext } from "react";
import css from "./UserInput.module.css"
import { FoodItemContext } from "../../store/food-item-context";
const UserInput = () => {
  const { addFood } = useContext(FoodItemContext);
  return <div>
    <input type="text" className={`${css['input-text']} w-100 mb-3`} onKeyDown={addFood} />
  </div>
}

export default UserInput;