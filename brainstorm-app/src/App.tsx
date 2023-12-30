import React from "react";
import "./App.css";
import { MindMap } from "./features/mindmap/components/MindMap";
import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <div className="Navbar">
        <div>
          <h1>brainstorm-app</h1>
          <p>
            This is just a placeholder for now and will be replaced with content
          </p>
        </div>
        <div className="NavbarButtonGroup">
          <Button text="Login" />
          <Button text="Signup" />
        </div>
      </div>
      <div className="ExperienceContainer">
        <MindMap />
      </div>
    </div>
  );
}

export default App;
