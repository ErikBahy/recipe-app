import React from "react";
import style from "../recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        <h2 style={{ font: "2rem", color: "#1f1f1f" }}>Ingredients:</h2>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p> Calories: {calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
