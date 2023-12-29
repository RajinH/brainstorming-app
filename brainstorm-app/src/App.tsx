import React from "react";
import "./App.css";
import { Mindmap } from "./features/mindmap/components/mindmap";

function App() {
  return (
    <div>
      <div className="NavBar">
        <h1>brainstorm-app</h1>
        <p>
          This is just a placeholder for now and will be replaced with content
        </p>
      </div>
      <div className="ExperienceContainer">
        <Mindmap />
      </div>
    </div>
  );
}

export default App;
