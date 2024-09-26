import React from "react";
import ReactDOM from "react-dom/client";
import Pics from './components/Pics'

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: pics</div>
    <div>Framework: react</div>

    <Pics></Pics>

  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)