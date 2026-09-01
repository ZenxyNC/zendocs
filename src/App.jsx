import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Main from "./components/main/main";
import FaultyTerminal from "./components/faulty-terminal/faultyTerminal";
import GradientWaves from "./components/gradient-waves/gradientwaves";

import "./App.css"
import Search from "./components/search/search";
import NotFound from "./components/404/404";
import Docs from "./components/docs/docs";

export default function App() {
  const [gradientwaves, setGradientwaves] = useState("#5227FF")
  return(
    <>
      {gradientwaves && <GradientWaves
          horizonColor={gradientwaves}
          waveColor="#007AFF"
          crestColor="#95C9FF"
          speed={0.4}
          amplitude={2.5}
          waveScale={1}
          waveRatio={0.9}
          swell={35}
          turbulence={30}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="low"
          brightness={1}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.7}
          grain
          grainIntensity={0.05}
        />
      }
      <Router  basename="/zendocs/">
        <Routes>
          <Route path="/" element={<Main setGradientwaves={setGradientwaves}/>} />
          <Route path="/search" element={<Search setGradientwaves={setGradientwaves}/>} />
          <Route path="*" element={<NotFound setGradientwaves={setGradientwaves}/>} />
          <Route path="/*" element={<NotFound setGradientwaves={setGradientwaves}/>} />
          <Route path="/docs/:project" element={<Docs setGradientwaves={setGradientwaves} />} />
        </Routes>
      </Router>
    </>

  )
}