import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./ParticleBackground.css";

function ParticleSystem() {
  const pointsRef = useRef();

  // Generate particle positions
  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // Z
    }
    return positions;
  }, []);

  // Rotate particles on each frame
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#ffffff" transparent opacity={0.8} />
    </points>
  );
}

function ParticleBackground() {
  return (
    <Canvas
      className="canvas"
      camera={{ position: [0, 0, 10] }}
      gl={{ antialias: true, alpha: false, clearColor: "black" }}
    >
      <ambientLight intensity={0.5} />
      <ParticleSystem />
    </Canvas>
  );
}

export default ParticleBackground;
