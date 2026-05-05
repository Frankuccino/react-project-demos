import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "../styles/hiddensearchbar.module.css";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleContainerClick = (e) => {
    // If the user clicks the background (not the input itself)
    if (e.target.tagName === "SECTION") {
      setShowInput(false);
      setBgColor("white");
    }
  };

  const handleIconClick = () => {
    setShowInput(true);
    setBgColor("#1a1a1a");
  };

  return (
    <section
      className={styles.searchWrapper}
      style={{ backgroundColor: bgColor }}
      onClick={handleContainerClick}
    >
      <Link
        to="/"
        className={styles.backBtn}
        style={{ color: bgColor === "white" ? "#1a1a1a" : "#fff" }}
      >
        ← Home
      </Link>

      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          autoFocus
          onClick={(e) => e.stopPropagation()} // Prevents the section click from firing
        />
      ) : (
        <>
          <FaSearch
            className={
              bgColor === "white" ? styles.searchIcon : styles.searchIconLight
            }
            onClick={handleIconClick}
          />{" "}
          <span>Search</span>
        </>
      )}
    </section>
  );
};

export default HiddenSearchBar;
