import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TextForm from "./components/Body";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // Alert message

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Mode Change Funtion
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#434343";
      document.body.classList.add("tf-dark");
      showAlert("Dark mode enabled", "success"); // Show alert message
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.classList.remove("tf-dark");
      showAlert("Light mode enabled", "success"); // Alert message
    }
  };

  return (
    <>
      <Router>
        {/* Navbar component with the 'mode' state passed down */}
        <Navbar
          title="TextFlow"
          mode={mode}
          aboutTitle="About"
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <br />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
          {/* exact is used to get the exact path as react do partial rendering */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
