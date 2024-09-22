import css from "./Items.module.css"
const Items = ({item, removeProduct}) => {
  return (
    <li className={`list-group-item`}>
      <span className={`${css["item-list"]}`}>{item}</span>
      <span className={`${css.cancel}`} onClick={() => removeProduct(item)}>X</span>
    </li>
  );
};
export default Items;
