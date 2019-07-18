import React, {useState} from 'react';
import './App.css';

// missing:
// - add autofocus on input field
// - change Done to Undo, when clicked 


function App() {
  const [todos, setTodos] = useState([
      {text: "Learn about React", isCompleted: false},
      {text: "Meet friend for lunch", isCompleted: false},
  ]);

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  const  deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  const Todo = ({todo, index}) => {
    return(
      <div style={{textDecoration: todo.isCompleted ? "line-through" : ''}} className="todo" key={index} index={index}>
        {todo.text} 
        <div>
          <button onClick={() => completeTodo(index)}>Done</button>
          <button onClick={() => deleteTodo(index)}> X </button>
        </div>
      </div>
    )
  }

  const TodoForm = () => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!value) return;
      console.log("Submitted!");
      addTodo(value);
      setValue('');
    }

    function addTodo(value) {
      let newTodos = [...todos, {text: value, isCompleted: false}];
      setTodos(newTodos);
    }

    return(
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} placeholder="Add a todo..." onChange={(e)=>setValue(e.target.value)}></input>
      </form>
    )
  }


  return (
    <div>
      <div className="app">
      <div className="todo-list">
          {todos.map((todo,index)=> (
              <Todo todo={todo} key={index} index={index}></Todo>  
          ))}
          <TodoForm/>
      </div>
    </div>
    </div>
  )
 
}

export default App;
