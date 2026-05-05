import { useState } from "react";
// Import the new module name
import styles from "../styles/todo.module.css";
import { Link } from "react-router-dom";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Simple check to prevent empty todos
    setTodos((todos) =>
      todos.concat({ text: input, id: Math.floor(Math.random() * 1000) }),
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    /* We use styles.todoPage to wrap everything for specific background/layout */
    <div className={styles.todoPage}>
      <Link to="/" className={styles.backBtn}>
        ← Home
      </Link>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.todoForm}>
          <input
            type="text"
            placeholder="Add a todo item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        <ul className={styles.todosList}>
          {todos.map(({ text, id }) => (
            <li className={styles.todoItem} key={id}>
              <span>{text}</span>
              <button
                className={styles.closeBtn}
                onClick={() => removeTodo(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
