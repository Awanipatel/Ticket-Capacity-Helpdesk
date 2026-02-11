import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function TodoPanel({ onCloseTodo }) {
  const [todos, setTodos] = useState([
    { id: 1, title: "Review customer feedback", done: false },
    { id: 2, title: "Update documentation", done: true },
    { id: 3, title: "Fix bug in module X", done: false },
    { id: 4, title: "Schedule follow-up call", done: false },
    { id: 5, title: "Send invoice", done: true },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), title: newTodo, done: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const completedCount = todos.filter(t => t.done).length;

  return (
    <div className="todoPanel">
      <div className="todoPanelHeader">
        <button className="backBtn" onClick={onCloseTodo}>
          <ChevronLeft size={20} />
        </button>
        <h3>Todo List</h3>
        <span className="todoCount">{completedCount}/{todos.length}</span>
      </div>

      <div className="todoInputSection">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          className="todoInput"
        />
        <button onClick={addTodo} className="addTodoBtn">+</button>
      </div>

      <div className="todoList">
        {todos.map((todo) => (
          <div key={todo.id} className={`todoItem ${todo.done ? 'done' : ''}`}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
              className="todoCheckbox"
            />
            <span className="todoText">{todo.title}</span>
            <button
              className="deleteTodoBtn"
              onClick={() => deleteTodo(todo.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="todoStats">
        <div className="statItem">
          <span className="statLabel">Completed</span>
          <span className="statValue">{completedCount}</span>
        </div>
        <div className="statItem">
          <span className="statLabel">Remaining</span>
          <span className="statValue">{todos.length - completedCount}</span>
        </div>
      </div>
    </div>
  );
}
