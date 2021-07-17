import React from 'react';
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  return (
    <div>
      <div>
        <Editor
          language = "xml"
          displayName = "HTML"
          value = {html}
          onChange={setHtml}
        />
      </div><br></br>
      <button>Compile</button>
      <button>Run</button>
    </div>
  );
}

export default App;
