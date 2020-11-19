import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function AlcoholScreen() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 35 }}>List of Alcoholic Recipes</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <RecipeComponent meal ="drink" category="alcohol"/>
    </div>
  );
}

export default AlcoholScreen;