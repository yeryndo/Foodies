import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function IcecreamScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Ice Cream Recipes for Dessert</h2>
      <RecipeComponent meal ="dessert" category="icecream"/>
    </div>
  );
}

export default IcecreamScreen;