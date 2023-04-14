import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </Router>
);