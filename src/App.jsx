import { useState } from 'react'
import './App.css'

import { Canvas } from "@react-three/fiber"; 
import MainScene from './components/scene/MainScene';

function App() {
  
  return (
    <Canvas>
      <mesh>
        <boxGeometry/>
        <meshStandardMaterial color="blue"/>
      </mesh>

      <MainScene/>
    </Canvas>
  );
}

export default App
