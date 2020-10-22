import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function JuiceScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Juice Recipes</h2>
      <RecipeComponent meal ="drink" category="juice"/>
    </div>
  );
}

export default JuiceScreen;