import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import './style.css';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

function App() {
  return (
    <div>
      <Wrapper>
        <Nav />
        <Books />
      </Wrapper>
      </div>
  );
}

export default App;
