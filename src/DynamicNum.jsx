function DynamicNum() {
  let num = Math.random() * 100;

  return <div style={{color:'#Ff3827'}}>The random number is : {Math.round(num)}</div>

}
export default DynamicNum;