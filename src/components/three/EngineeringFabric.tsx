"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Stars, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Cloud({ count = 5000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = 50 * Math.sin(phi) * Math.cos(theta);
      const y = 50 * Math.sin(phi) * Math.sin(theta);
      const z = 50 * Math.cos(phi);
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, [count]);

  const ref = useRef<any>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function DataPulse({ color = "#3b82f6", speed = 1 }) {
  const mesh = useRef<any>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (mesh.current) {
      mesh.current.scale.setScalar(1 + Math.sin(t) * 0.1);
      mesh.current.opacity = 0.5 + Math.sin(t) * 0.2;
    }
  });

  return (
    <Sphere args={[20, 32, 32]}>
      <meshStandardMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.1} 
        emissive={color}
        emissiveIntensity={2}
      />
    </Sphere>
  );
}

export const EngineeringFabric = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 100], fov: 60 }}>
        <color attach="background" args={["#020617"]} />
        <fog attach="fog" args={["#020617", 50, 150]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Cloud />
          <DataPulse color="#3b82f6" speed={0.5} />
          <DataPulse color="#8b5cf6" speed={0.8} />
        </Float>
      </Canvas>
    </div>
  );
};
