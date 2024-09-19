import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Profile from "./components/Profile";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: profile</div>
    <div>Framework: react</div>

    <React.StrictMode>
      <BrowserRouter>
        <Profile></Profile>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);

const rootElement = document.getElementById("profile")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)