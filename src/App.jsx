import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Main from "./components/main/main";
import FaultyTerminal from "./components/faulty-terminal/faultyTerminal";

import "./App.css"
import Search from "./components/search/search";
import NotFound from "./components/404/404";
import Docs from "./components/docs/docs";

export default function App() {
  const [faultyTerminal, setFaultyTerminal] = useState("#a7ef9e")
  return(
    <>
      {faultyTerminal && <FaultyTerminal
        scale={1.5}
        speed={0.5}
        digitSize={1.2}
        scanlineIntensity={0.5}
        noiseAmp={1}
        curvature={0.1}
        tint={faultyTerminal}
        mouseReact={true}
        mouseStrength={0.5}
        pageLoadAnimation={true}
        brightness={0.6}
      />}
      <Router  basename="/zendocs/">
        <Routes>
          <Route path="/" element={<Main setFaultyTerminal={setFaultyTerminal}/>} />
          <Route path="/search" element={<Search setFaultyTerminal={setFaultyTerminal}/>} />
          <Route path="*" element={<NotFound setFaultyTerminal={setFaultyTerminal}/>} />
          <Route path="/*" element={<NotFound setFaultyTerminal={setFaultyTerminal}/>} />
          <Route path="/docs/:project" element={<Docs setFaultyTerminal={setFaultyTerminal} />} />
        </Routes>
      </Router>
    </>

  )
}