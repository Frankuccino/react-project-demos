import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/togglebackgroundcolor.module.css";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
  };

  return (
    /* We apply the module class AND the dynamic inline style here */
    <div
      className={styles.toggleWrapper}
      style={{ backgroundColor, color: textColor }}
    >
      <Link to="/" className={styles.backBtn}>
        ← Home
      </Link>

      <button
        onClick={handleClick}
        style={{ color: textColor, border: `2px solid ${textColor}` }}
      >
        {backgroundColor === "white" ? "Black Theme" : "White Theme"}
      </button>

      <section className={styles.content}>
        <h1>
          Style is <br />
          Everything
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
