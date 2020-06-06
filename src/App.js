import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Content/Main/Main";
import Joseki from "./components/Content/Joseki/Joseki";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Route component={Main} path="/main" />
          <Route component={Joseki} path="/joseki" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
