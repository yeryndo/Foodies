import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function TeaScreen() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 35 }}>List of Tea Recipes</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <RecipeComponent meal ="drink" category="tea"/>
    </div>
  );
}

export default TeaScreen;