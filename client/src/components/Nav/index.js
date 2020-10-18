import React from "react";

function Nav() {
  return (
 
       <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Google Book Search</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="/">Search</a></li>
              <li><a href="/">Saved</a></li>
            </ul>
          </div>
      </nav>
  );
}

export default Nav;
