import React from "react";
import 'materialize-css/dist/css/materialize.min.css';


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
        <label htmlFor="bookSearch"></label>
        <input width= "50%"
          name="bookSearch"
          list="bookSearchs"
          type="text"
          placeholder="Enter Book detail to Search"
          className="validate"
          id="bookSearch"
        />
        
        <button type="submit" onClick={props.handleFormSubmit} name="action" className="btn waves-effect waves-light">
          Search   <i className="material-icons right">send</i>
        </button> 
      </div>
      </div>
    </form>
    </div>
  );
}

export default SearchForm;
