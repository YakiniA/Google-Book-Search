import React from "react";
import SearchImg from "../../img/SearchImg.png";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron text-center">
      <h1 style={{color:"black"}}><img src={SearchImg} className="navBarImg navbar-brand" alt="" width="150" height="150"></img>
Google Book Search</h1>
      {/* <a target="_blank" rel="noopener noreferrer" href="http://www.recipepuppy.com/about/api/">
        Powered by Recipe Puppy
      </a> */}
    </div>
  );
}

export default Jumbotron;
