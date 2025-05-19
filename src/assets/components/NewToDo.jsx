import React, { useState } from "react";
import { useReducer } from "react";


//state [{id:1 , text:"eat", completed:false}]
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,//Eat breakfast
          completed: false,
        },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id == action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

const NewToDo = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [taskName, setTaskName] = useState("");



  const handleChange = (e) =>{
    setTaskName(e.target.value)
  }
  return (
    <>
      <div className="container">
        <h1>ToDos</h1>

        <input
          type="text"
          onChange={handleChange}
          placeholder="Add new Task"
        />
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "ADD", payload: { text: taskName } });
          }}
        >
          {" "}
          Add
        </button>

        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              style={
                todo.completed
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {todo.text}
            </p>
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "TOGGLE", payload: { id: todo.id } })
              }
            >
              {todo.completed? "reset" : "completed"}
            </button>
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "DELETE", payload: { id: todo.id } })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default NewToDo;
