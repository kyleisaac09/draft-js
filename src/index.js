import React from "react";
import ReactDOM from "react-dom";
import FBEditor from "./FBEditor.jsx";

import "./styles.css";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FBEditor />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
