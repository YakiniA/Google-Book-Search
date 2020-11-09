import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

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
        <Link
             
                style={{ color: "rgb(190, 147, 3)" }}
                to="/search"
                className={
                  window.location.pathname === "/search"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
               
                Search
        </Link>
          {/* <a className="nav-link" href="/#">Search </a> */}
        </li>
        <li className="nav-item">
        <Link
               
                style={{ color: "rgb(190, 147, 3)" }}
                to="/saved"
                className={
                  window.location.pathname === "/saved"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
              
                Saved
        </Link>
          {/* <a className="nav-link" href="/#">Saved</a> */}
        </li>
       
      </ul>
    </div>
  </nav>
    
  );
}

export default Nav;
