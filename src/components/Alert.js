import React from "react";
import "../Styling/Alert.css"

function Alert(props) {
  const capitalize = (Word) => {
    return Word.charAt(0).toUpperCase() + Word.slice(1);
    // Capitalize the first letter of a word (This line capitalizes the first letter of the string Word and appends the rest of the string unchanged)
  };
  return (
    <div className="textflow-alert" style={{ minHeight: "38px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
