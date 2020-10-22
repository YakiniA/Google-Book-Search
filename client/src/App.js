import React from "react";
import Books from "./pages/Books";
import SavedBooks from "./pages/SavedBooks";
import { HashRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import './style.css';

function App() {
  return (
    <div>
      <Wrapper>
      <Router>
          <div>
       
          <Route exact path="/" component={Books} />
          <Route exact path="/saved" component={SavedBooks} />
          </div>
    </Router>
      </Wrapper>
      </div>
  );
}

export default App;
