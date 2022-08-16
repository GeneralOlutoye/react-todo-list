import { useState } from "react";
import { FaPlus } from 'react-icons/fa'

const Nav = (props) => {

  const [input, setInput] = useState("")


  // function to handle submit
  
  const submitHandler = (e)=>{
    e.preventDefault()
    props.addTodo(input)
    setInput("")
  }

  return (
    <form onSubmit={submitHandler}>

      <input 
        value={input}
        className="addInput"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a To-do"
      /> 

      <button type="submit" className="btn"> <FaPlus/> </button>
    </form>
  );
}

export default Nav;