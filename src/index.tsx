import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/components";
import { AppProvider } from "./app/providers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        {/* ERRORBOUNDARY */}
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
