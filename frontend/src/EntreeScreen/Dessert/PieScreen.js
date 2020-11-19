import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function PieScreen() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 35 }}>List of Pie Recipes for Dessert</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <RecipeComponent meal ="dessert" category="pie"/>
    </div>
  );
}

export default PieScreen;