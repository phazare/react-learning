import css from "./Container.module.css";
const Container = (props) => {
  return <div className={`${css.container} mt-5 p-3 clearfix`}>{ props.children} </div>
}
export default Container;