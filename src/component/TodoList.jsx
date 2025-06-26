
import React, { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
  let [todo, setTodo] = useState({ name: "", desc: "", date: "", time: "" });
  let [todoList, setTodoList] = useState([]);
  let [editIndex, setEditIndex] = useState(null);

  let ChangeHandler = (e) => {
    let { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  let addHandler = (e) => {
    e.preventDefault();
    // if (!todo.name || !todo.desc || !todo.date || !todo.time) return alert("All fields are required");

    if (editIndex !== null) {
      let updatedList = [...todoList];
      updatedList[editIndex] = todo;
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      setTodoList([...todoList, todo]);
    }

    setTodo({ name: "", desc: "", date: "", time: "" });
  };

  let DeleteHandler= (index) => {
    let filteredList = todoList.filter((v, i) => i !== index);
    setTodoList(filteredList);
  };

  let EditHandler = (index) => {
    setTodo(todoList[index]);
    setEditIndex(index);
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h2> My Todo List</h2>
        <form onSubmit={addHandler} className="todo-form">
          <input
            type="text"
            name="name"
            placeholder="Enter task title"
            value={todo.name}
            onChange={ChangeHandler}
          />
          <input
            type="text"
            name="desc"
            placeholder="Enter task description"
            value={todo.desc}
            onChange={ChangeHandler}
          />
          <div className="datetime-row">
            <input
              type="date"
              name="date"
              value={todo.date}
              onChange={ChangeHandler}
            />
            <input
              type="time"
              name="time"
              value={todo.time}
              onChange={ChangeHandler}
            />
          </div>
          <button type="submit">{editIndex !== null ? "Update Task" : "Add Task"}</button>
        </form>

        
    </div>
    <div className="todo-cards">
          {todoList.map((item, index) => (
            <div key={index} className="todo-card">
              <div className="card-header">
                <h3>{item.name}</h3>
                <div className="card-icons">
                  <button onClick={() => EditHandler(index)} className="icon-btn edit">✏️</button>
                  <button onClick={() => DeleteHandler(index)} className="icon-btn delete">❌</button>
                </div>
              </div>
              <p>{item.desc}</p>
              <div className="card-footer">
                <span>{item.date}</span>
                <span> {item.time}</span>
              </div>
            </div>
          ))}
    </div>
</div>
  );
}
