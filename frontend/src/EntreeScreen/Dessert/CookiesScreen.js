import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function CookieScreen() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 35 }}>List of Cookie Recipes for Dessert</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <RecipeComponent meal ="dessert" category="cookies"/>
    </div>
  );
}

export default CookieScreen;