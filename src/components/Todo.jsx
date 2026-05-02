import { useState } from "react";
import "../styles/todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) =>
      todos.concat({ text: input, id: Math.floor(Math.random() * 100) }),
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id != id));
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <ul className="todos">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
