"use client";

import * as THREE from "three";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { useState, useRef } from "react";

type BoxProps = ThreeElements["mesh"];

export default function Box(props: BoxProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      {...props}
    >
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

// import { useRef } from "react";


// export default function Box(){
//     const ref = useRef();
//     useFrame(()=>{
//         ref.current.rotation.x += 0.01;
//     })

//     return(
//         <mesh ref={ref}>
//             <boxGeometry/>
//             <meshStandardMaterial color="orange"/>
//         </mesh>
//     );
// }
