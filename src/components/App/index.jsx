import React from "react";
import Header from "../Header/Header";
import Workspace from "../Workspace/Workspace";
import "./App.scss";

const App = () => {

  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <Workspace />
      </main>
    </div>
  );
};

export default App
