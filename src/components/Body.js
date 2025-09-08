import React, { useState } from "react";
import "../Styling/Body.css";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

export default function Body(props) {
  // State variable to store the text entered in the textarea
  const [text, setText] = useState("Enter Text Here");
  // setText is a function to update the value of text
  // text is the current value of the state variable
  // useState is a hook that allows us to use state in functional components
  // State variable to store the word to filter
  const [searchWord, setSearchWord] = useState("");
  // State variable to store the filtered text with highlighted words
  const [filteredText, setFilteredText] = useState("");

  // Function to handle changes in the textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
    // Update the value of the text state variable with the value entered in the textarea
    // event.target.value is the value entered in the textarea
  };

  // Function to handle the "Convert To Uppercase" button click
  const handleOnClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case", "success");
    // Convert text to uppercase and update the state variable
  };

  const handleOnClick1 = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case", "success");
    // Convert text to lowercase and update the state variable
  };

  // Function to handle the "Filter Text" button click
  const handleClearText = () => {
    setText("");
    setFilteredText("");
    props.showAlert("Text Cleared", "success");
    // Clear both the text and filteredText state variables
  };

  // Function to handle the search input change
  const handleSearchChange = (event) => {
    setSearchWord(event.target.value);
    // Update the searchWord state variable with the value entered in the input field
  };

  // Function to handle the "Copy Text" button click
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
    // Copy the text to the clipboard using the Clipboard API
  };

  // Function to filter text based on the search word and highlight matching words
  const handleFilterText = () => {
    if (!searchWord.trim()) {
      setFilteredText(text); // If no word is entered, show the original text
      return;
    }

    // Create a regular expression to match the search word (case insensitive)
    const regex = new RegExp(`(${searchWord})`, "gi");
    // Replace the matched word with a highlighted version using <span class="textflow-highlight">
    const highlightedText = text.replace(
      regex,
      '<span class="textflow-highlight">$1</span>'
    );
    setFilteredText(highlightedText);
    // Update the filteredText with the highlighted version of the text
  };

  // text = "Hello World";
  // Incorrect: Directly changing the value of the state variable will throw an error in React
  // setText("Hello World");
  // Correct: Use setText function to update the state variable

  return (
    <>
      <div className="container textflow-hero container-card">
        <h1>{props.heading}</h1>
        {/* Display the heading passed as a prop */}
        <div className="mb-3">
          <textarea
            className="form-control textflow-textarea"
            value={text}
            id="my-box"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
          {/* onChange is used to call the handleOnChange function when the textarea value changes */}
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleOnClick}
        >
          Convert To Uppercase
        </button>
        {/* Button to trigger the handleOnClick function */}
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleOnClick1}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 my-1"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <div className="my-3">
          <input
            type="text"
            className="form-control"
            value={searchWord}
            onChange={handleSearchChange}
            placeholder="Enter word to search"
          />
          {/* Input field to capture the word to search */}
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2"
            onClick={handleFilterText}
          >
            Filter Text
          </button>
          {/* Button to trigger the handleFilterText function */}
        </div>
      </div>
      <div className="container my-3 container-card summary-section">
        <h1 className="summary-title">Your Text Summary</h1>

        <div className="summary-stats">
          <div className="summary-box summary-words">
            <span className="summary-icon">📝</span>
            Words: {text.trim() ? text.trim().split(/\s+/).length : 0}
          </div>
          <div className="summary-box summary-characters">
            <span className="summary-icon">🔤</span>
            Characters: {text.length}
          </div>
          <div className="summary-box summary-readtime">
            <span className="summary-icon">⏳</span>
            Read Time:{" "}
            {text.trim()
              ? (text.trim().split(/\s+/).length * 0.008).toFixed(2)
              : "0"}{" "}
            min
          </div>
        </div>

        <h2 className="mt-4">Filtered Text (Highlighted)</h2>
        <p
          dangerouslySetInnerHTML={{
            __html:
              filteredText || "No matching words found or no word entered.",
          }}
        ></p>
      </div>
    </>
  );
}

// Prop validation to ensure the correct types and requirements for props
Body.propTypes = {
  heading: PropTypes.string.isRequired,
  // Heading must be a string and is required
};

// Default values for props if they are not passed by the parent component
Body.defaultProps = {
  heading: "Default Text",
  // Default value for the heading prop
};

// Here we are using PropTypes to validate the props passed to the component and defaultProps to set default values.
