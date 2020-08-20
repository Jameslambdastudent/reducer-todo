import React, {useReducer} from 'react';
import {reducer, initialState} from "./reducer";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = e => {
    e.preventDefault();

    const newTodo = {
      id: new Date(),
      item: document.querySelector("#todo-input").value,
      completed: false
    }

    if(!newTodo.item) return;
    
    dispatch({type: "ADD_TODO", payload: newTodo});
    
    document.querySelector("#todo-input").value = "";
  }

  return (
    <div className="App">
      <section className="form">
        <form onSubmit={submit}>
          <input id="todo-input" type="text" placeholder="Add a task"/>
          <button className="button">Add Todo</button>
        </form>
        <button className=".item.purchased" onClick={()=> dispatch({type: "CLEAR_COMPLETED"})}>Clear Completed</button>
      </section>
      <section className="item">
        {state.todos.map(todo=>{
          return (
            <div 
              onClick={()=> dispatch({type: "TOGGLE_COMPLETE", payload: {id: todo.id}})} 
              key={todo.id} 
              className={"clear-btn" + (todo.completed? "completed": "") }
            >
              {todo.item}
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default App;