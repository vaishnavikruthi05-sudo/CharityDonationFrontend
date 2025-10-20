import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Campaign from "./pages/Campaign";

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/campaigns">Campaigns</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/campaigns" element={<Campaign />} />
      </Routes>
    </Router>
  );
}

export default App;


