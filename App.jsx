
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Bring nature into your home with our beautiful
          collection of indoor and outdoor plants.
        </p>

        <button
          className="get-started"
          onClick={() => alert("Welcome to Paradise Nursery!")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
