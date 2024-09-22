import Items from "./Items";
const FoodItems = ({foodItem, removeFromList}) => {
  // const removeProduct = (event, data) => {
  //   console.log(event,data)
  // }
  return (
    <ul className="list-group">
      {foodItem.map((item) => (
        <Items key={item} item = {item} removeProduct = {removeFromList}></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
