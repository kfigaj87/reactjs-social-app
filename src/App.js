import React from "react";
import "./App.css";
import AppRoutes from "./routes/Approutes";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <Nav />
    </div>
  );
}

export default App;
