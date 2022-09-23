import { useState } from "react";
import { FaPlus } from 'react-icons/fa'
import "antd/dist/antd.min.css";
import { message } from "antd";

const Nav = (props) => {

  const [input, setInput] = useState("")


  // function handling input submit when input does not equal empty
  
  const submitHandler = (e)=>{
    if (input === '') {
      e.preventDefault()
      message.error('Enter Task To Do: ')
    } else {
      message.success('Task Added succesfully')
      e.preventDefault()
      props.addTodo(input)
      setInput("")
    }
  }

  return (
    <form onSubmit={submitHandler}>

      <input 
        value={input}
        className="addInput"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Make A To-do List"
      /> 

      <button type="submit" className="btn"> <FaPlus /> </button>
    </form>
  );
}

export default Nav;
