import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function GrainDinnerScreen() {
  return (
    <div>
      <h2 style={{marginTop: 20, marginLeft: 35 }}>List of Grain Recipes for Dinner</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <RecipeComponent meal ="dinner" category="grain"/>
    </div>
  );
}

export default GrainDinnerScreen;