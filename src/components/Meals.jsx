import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/meals.css";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data.meals);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <figure className="card">
        <img src={strMealThumb} alt={strMeal} />
        <figcaption className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </figcaption>
      </figure>
    );
  });

  return <div className="items-container">{itemsList}</div>;
};

export default Meals;
