import React from "react";
import "./style.css";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Google Book Search</a> 
    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mr-3">
          <a className="nav-link" href="/#">Search </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Saved</a>
        </li>
       
      </ul>
    </div>
  </nav>
    
  );
}

export default Nav;
