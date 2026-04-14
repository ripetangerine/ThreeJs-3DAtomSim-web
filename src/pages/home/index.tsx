"use client";

import { Canvas } from "@react-three/fiber";
// import Box from "@/components/model/Box";
import Box from "../../components/model/Box";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ width: "50vw", height: "50vh" }}>
        <Canvas
          camera={{
            position: [0, 0, 10],
          }}
        >
          <ambientLight />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </div>
    </main>
  );
}