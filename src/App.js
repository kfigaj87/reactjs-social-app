import React, { useState } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Nav from "./components/Nav";
import background from "./img/wall.jpg";

import axios from "axios";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + (user ? user.jwt_token : "");
  axios.defaults.headers.post["Content-Type"] = "application/json";

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Nav user={user} setUser={setUser} />
      <AppRoutes user={user} setUser={setUser} />
    </div>
  );
}

export default App;
