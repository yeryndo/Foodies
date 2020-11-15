import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";
import SwitchRouter from "./Components/SwitchRouter"
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SwitchRouter />
      </div>
    </Router>
  );
}

export default App;