import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todoRedicer";


const Task = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
  
    function addNewTask() {
      const task = inputRef.current.value.trim();
      if (task !== "") {
        dispatch(addTodo(task));
        inputRef.current.value = "";
      }
    }
  
    return (
      <div className="todo-form-container">
        <div className="add-task">
          <input
            type="text"
            placeholder="Add Your tasks"
            ref={inputRef}
            className="taskInput"
          />
          <button onClick={addNewTask} style={{color:"green", fontFamily:"sans-serif", fontSize:"larger", cursor:"pointer"}} >Add task</button>
        </div>
      </div>
    );
  };
  
  export default Task;