import DemoApp from "./DemoApp";
function App() {
  let foodItems = ["Roti", "Sabji", "Dal", "Salad", "Milk"];
  let emptyMsg = foodItems.length === 0 ? <h3>No food available!!</h3> : null
  return (
    <>
      <h1>Hello World</h1>
      {/* <DemoApp></DemoApp> */}
      {emptyMsg}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
