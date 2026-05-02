import { useState } from "react";
import "../styles/calculator.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => setInputValue(inputValue + value);

  // const calculate = () => setInputValue(eval(inputValue));
  const calculate = () => {
    try {
      // Best Practice: Use a Function constructor instead of eval for basic math
      // It's still powerful, but scoped slightly better.
      // Even better: Use a math library or a custom parser.
      const result = new Function(`return ${inputValue}`)();

      // Check for division by zero or invalid results
      if (result === Infinity || isNaN(result)) {
        setInputValue("Error");
      } else {
        setInputValue(String(result));
      }
    } catch (error) {
      setInputValue("Error:", error);
    }
  };

  const clear = () => setInputValue("");

  return (
    <form action="" className="calculator" name="calc">
      <input type="text" className="value" value={inputValue} />
      <span className="num clear" onClick={() => clear()}>
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
      <span className="plus" onClick={() => display("+")}>
        +
      </span>

      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span className="num equal" onClick={() => calculate()}>
        =
      </span>
    </form>
  );
};

export default Calculator;
