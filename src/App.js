import React, { useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Nav from "./components/Nav";
// import Post from "./components/Post";
import axios from "axios";

function App() {
  const [user, setUser] = useState();
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + (user ? user.jwt_token : "");
  axios.defaults.headers.post["Content-Type"] = "application/json";

  console.log(setUser);

  // const handleInputChange = (e) => {
  //   const target = e.target;
  //   const name = target.name;
  //   setFromData({
  //     ...formData,
  //     [name]: target.value,
  //   });

  return (
    <div className="App">
      <Nav />
      <AppRoutes />
    </div>
  );
}
// }

export default App;
