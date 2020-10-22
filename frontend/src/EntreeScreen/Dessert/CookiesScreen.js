import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function CookieScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Cookie Recipes for Dessert</h2>
      <RecipeComponent meal ="dessert" category="cookie"/>
    </div>
  );
}

export default CookieScreen;