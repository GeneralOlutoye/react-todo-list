import { FaCheck, FaTimes } from 'react-icons/fa'

const Container = (props) => {
  return (
    <div className={ props.todo.completed ? "rowCompleted": "showBar"}>
        {props.todo.text} 
        <div className="icons">
        <span onClick={()=> props.deleteTodo(props.todo.id)} > <FaTimes className='times' /> </span>
        <span onClick={()=> props.markTodo(props.todo.id)}> <FaCheck className='checked' /> </span>
        </div>
    </div>
  );
}
 
export default Container;