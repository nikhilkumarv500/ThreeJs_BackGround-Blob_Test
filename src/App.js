import React from "react";
import WebGLCanvas from "./Components/WebGLCanvas/WebGLCanvas";
import Blob from "./Components/Blob/Blob";

const App = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <WebGLCanvas />
      </div>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0  }}>
        <Blob />
      </div>
    </>
  );
};

export default App;
