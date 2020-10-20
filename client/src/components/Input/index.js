import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Input(props) {
  return (
    <div className="row">
        <div class="col s12 m6 l6 offset-l1">
      <input className="validate" type="text" {...props} />
      </div>
    </div>
  );
}

export default Input;
