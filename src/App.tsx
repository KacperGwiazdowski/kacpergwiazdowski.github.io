import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { Sidebar } from "./sidebar";
import { Content } from "./content";

const App = () => (
  <BrowserRouter>
    <div className="page-wrapper">
      <Sidebar />
      <Content />
    </div>
  </BrowserRouter>
);

export default App;
