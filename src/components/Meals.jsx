import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/meals.module.css";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section key={idMeal} className={styles.card}>
        <img src={strMealThumb} alt={strMeal} />
        <section className={styles.content}>
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <div className={styles["items-container"]}>
      {/* Adding the back button here */}
      <Link to="/" className={styles.backBtn}>
        ← Home
      </Link>
      {itemsList}
    </div>
  );
};

export default Meals;
