  
import React from "react";
import PostListofRecipes from "../Grid/PostListofRecipes";


function HomeScreen() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 35 }}>Recommendations for Today</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <PostListofRecipes/>
    </div>
  );
}

export default HomeScreen;