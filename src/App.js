import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Nav from "./components/Nav";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Nav />
      <AppRoutes />
    </div>
  );
}

export default App;
