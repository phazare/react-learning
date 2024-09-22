import css from "./UserInput.module.css"
const UserInput = ({changeText}) => {
  return <div>
    <input type="text" className={`${css['input-text']} w-100 mb-3`} onKeyDown={changeText}/>
  </div>
}

export default UserInput;