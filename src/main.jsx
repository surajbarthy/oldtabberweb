import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

/** Supports Vite `base` subpaths; root and `./` use default `/`. */
function routerBasename() {
  const b = import.meta.env.BASE_URL;
  if (b === "/" || b === "./") return undefined;
  return b.endsWith("/") ? b.slice(0, -1) : b;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
