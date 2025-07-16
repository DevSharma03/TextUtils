import React from 'react';

function Alert(props) {

  const capitalize = (Word) => {
    return Word.charAt(0).toUpperCase() + Word.slice(1); 
    // Capitalize the first letter of a word (This line capitalizes the first letter of the string Word and appends the rest of the string unchanged)
  }
  return (
    <div style={{height: "30px"}}>
      {props.alert &&  // Correctly wrap the conditional rendering
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          {/* Check if `props.alert` is truthy before rendering the alert */}
          {/* it checks the first part first and then ckeck the second as if the first one is true, if the first statement is true then only it will evoluate the sceond one and return the second statement  */}
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      }
    </div>
  );
}

export default Alert;
