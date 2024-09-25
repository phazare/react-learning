import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import UserInput from "./components/UserInput";
import EmptyFoodList from "./components/EmptyFoodList";
import FoodContext from "../store/food-item-context";

function ReducerExample() {
  const shareList = () => {
    if (foodItems.length > 0) {
      const msg = `Grocery list\n${foodItems.join("\n")}`;

      const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;

      window.open(url, "_blank");
    }
  };
  return (
    <FoodContext>
      <Container>
        <EmptyFoodList></EmptyFoodList>
        <h5 className="text-center mb-3"> Create grocery list</h5>
        <UserInput></UserInput>
        <FoodItems></FoodItems>
        <button className="btn btn-success mt-3 float-end" onClick={shareList}>
          Share
        </button>
      </Container>
    </FoodContext>
  );
}
export default ReducerExample;
