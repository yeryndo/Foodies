import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function TeaScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Tea Recipes</h2>
      <RecipeComponent meal ="drink" category="tea"/>
    </div>
  );
}

export default TeaScreen;