import FoodItems from "./components/FoodItems";
import DemoApp from "./DemoApp";
import Container from "./components/Container";
import UserInput from "./components/UserInput";
import { useState } from "react";
function App() {
  // let foodItemList = ["Roti", "Sabji", "Dal"];
  // let [inputText, setInputText] = useState("Entered Text");
  let [foodItems, setFoodItems] = useState([])
  let emptyMsg = foodItems.length === 0 ? <h4 className="text-center">You do not have grocery list!!</h4> : null
  const changeInputText = (event) => {
    if(event.key === "Enter") {
      // setInputText(event.target.value);
      setFoodItems([...foodItems, event.target.value]);
      event.target.value = "";
    }
  }

  const removeProduct = (data) => {
    if(foodItems.includes(data)){
      setFoodItems(foodItems.filter(x => x != data))
    }
  }

  const shareList = () => {
    if(foodItems.length > 0) {
      const msg = `Grocery list\n${foodItems.join('\n')}`;
  
      const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  
      window.open(url, "_blank");
    }
  }
  return (
    <Container className="clearfix">
      {/* <h1>Hello World</h1> */}
      {/* <DemoApp></DemoApp> */}
      {emptyMsg}
      <h5 className="text-center mb-3"> Create grocery list</h5>
      <UserInput changeText={changeInputText}></UserInput>
      {/* <p>{ inputText }</p> */}
      <FoodItems foodItem = {foodItems} removeFromList = {removeProduct}></FoodItems>
      <button className="btn btn-success mt-3 float-end" onClick={shareList}>Share</button>
    </Container>
  );
}
export default App;
