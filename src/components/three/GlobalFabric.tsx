"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function EngineeringNode({ position, color }: any) {
  const mesh = useRef<any>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.position.y += Math.sin(t + position[0]) * 0.01;
    }
  });

  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={mesh} position={position} args={[1, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          speed={4}
          distort={0.4}
          radius={1}
          emissive={color}
          emissiveIntensity={2}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
}

function GlobalCore() {
  const mesh = useRef<any>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
      mesh.current.rotation.z += 0.002;
    }
  });

  return (
    <Sphere ref={mesh} args={[20, 64, 64]}>
      <MeshWobbleMaterial
        color="#3b82f6"
        speed={1}
        factor={0.4}
        wireframe
        transparent
        opacity={0.1}
      />
    </Sphere>
  );
}

export const GlobalFabricVisualization = () => {
  const nodes = [
    { pos: [30, 10, 0], color: "#3b82f6" },
    { pos: [-30, -15, 10], color: "#8b5cf6" },
    { pos: [10, 25, -20], color: "#10b981" },
    { pos: [-20, 20, 20], color: "#f59e0b" },
    { pos: [0, -30, -10], color: "#ef4444" },
  ];

  return (
    <div className="absolute inset-0 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 100], fov: 60 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#8b5cf6" />
        
        <GlobalCore />
        
        {nodes.map((node, i) => (
          <EngineeringNode key={i} position={node.pos} color={node.color} />
        ))}

        {/* Connections */}
        <line>
          <bufferGeometry />
          <lineBasicMaterial color="#3b82f6" transparent opacity={0.2} />
        </line>
      </Canvas>
    </div>
  );
};
