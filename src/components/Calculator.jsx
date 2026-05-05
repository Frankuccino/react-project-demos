import { useState } from "react";
import styles from "../styles/calculator.module.css";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => setInputValue(inputValue + value);

  const calculate = () => {
    try {
      const result = new Function(`return ${inputValue}`)();
      setInputValue(
        result === Infinity || isNaN(result) ? "Error" : String(result),
      );
    } catch (error) {
      setInputValue("Error", error);
    }
  };

  const clear = () => setInputValue("");

  return (
    <div className={styles.calculatorWrapper}>
      <Link to="/" className={styles.backBtn}>
        ← Home
      </Link>
      <form
        className={styles.calculator}
        name="calc"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className={styles.value}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          readOnly
        />

        {/* Use template literals for multiple module classes */}
        <span
          className={`${styles.num} ${styles.clear}`}
          onClick={() => clear()}
        >
          C
        </span>

        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>

        <span className={styles.plus} onClick={() => display("+")}>
          +
        </span>

        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>

        <span
          className={`${styles.num} ${styles.equal}`}
          onClick={() => calculate()}
        >
          =
        </span>
      </form>
    </div>
  );
};

export default Calculator;
