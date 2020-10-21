import React from "react";
import "./style.css";
function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Google Book Searck</a>
    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Search </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Saved</a>
        </li>
       
      </ul>
    </div>
  </nav>
      // <nav className="navbar navbar-dark bg-dark">
      //   <a className="navbar-brand" href="/">
      //   Google Book Search
      //   </a>
      // </nav>
    
  );
}

export default Nav;
