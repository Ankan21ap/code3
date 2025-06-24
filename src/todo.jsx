import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");
  let [markDone, setMarkDone] = useState([
    { task: "sample task ", id: uuidv4(), done: false },
  ]);

  let addNewTask = () => {
    setTodos((prevtodos) => {
      return [...todos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deletebtn = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseoOne = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let MarkDone = (id) => {
    const markedtodo = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(markedtodo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add new to dop task "
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <button onClick={addNewTask}>add</button>
      <br />
      <br />
      <hr />
      <h4> to do list </h4>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            <span>{todo.task}</span>
            <button onClick={() => deletebtn(todo.id)}>delete</button>
            <button onClick={() => upperCaseoOne(todo.id)}>
              uppercase one
            </button>
            <button onClick={() => MarkDone(todo.id)}>mark done</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>updateTo upperCaseAll</button>
    </div>
  );
}
