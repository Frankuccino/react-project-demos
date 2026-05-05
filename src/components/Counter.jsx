import { useState } from "react";
// 1. Import the newly renamed module file
import styles from "../styles/counter.module.css";
// 2. Import a back button so you aren't trapped in this route
import { Link } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    /* 3. Use styles.className. 
       We use a 'mainWrapper' to replace what used to be in the 'body' tag */
    <div className={styles.mainWrapper}>
      <Link to="/" className={styles.backBtn}>
        ← Home
      </Link>

      <div className={styles.container}>
        <h1 className={styles.number}>{count}</h1>
      </div>

      <div className={styles.btnsContainer}>
        <button onClick={increment} className={styles.btnAction}>
          +
        </button>
        <button onClick={decrement} className={styles.btnAction}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
