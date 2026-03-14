"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Group } from "three";

function hasWebGLSupport() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

function BlockCluster() {
  const group = useRef<Group>(null);

  const blocks = useMemo(
    () => [
      { position: [0, 0, 0] as [number, number, number], size: [1.8, 0.4, 1.8] as [number, number, number] },
      { position: [0, 0.5, 0] as [number, number, number], size: [1.2, 0.35, 1.2] as [number, number, number] },
      { position: [0.45, 0.95, 0.35] as [number, number, number], size: [0.6, 0.3, 0.6] as [number, number, number] },
      { position: [-0.45, 0.95, -0.35] as [number, number, number], size: [0.6, 0.3, 0.6] as [number, number, number] },
      { position: [0, 1.35, 0] as [number, number, number], size: [0.5, 0.28, 0.5] as [number, number, number] },
    ],
    [],
  );

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <group ref={group}>
      {blocks.map((item, index) => (
        <mesh key={index} position={item.position}>
          <boxGeometry args={item.size} />
          <meshStandardMaterial
            color={index === 0 ? "#0f172a" : "#1e293b"}
            emissive={index % 2 === 0 ? "#164e63" : "#082f49"}
            emissiveIntensity={0.18}
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ContactHub3D() {
  const canRender = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    return !media.matches && hasWebGLSupport();
  }, []);

  if (!canRender) {
    return (
      <div className="surface flex h-72 items-center justify-center rounded-xl p-4 text-center text-sm text-slate-400">
        3D preview is disabled for reduced motion or unavailable WebGL.
      </div>
    );
  }

  return (
    <div className="surface h-72 overflow-hidden rounded-xl">
      <Canvas camera={{ position: [2.8, 2.6, 2.8], fov: 40 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 4, 3]} intensity={1.1} color="#67e8f9" />
        <directionalLight position={[-4, 2, -2]} intensity={0.45} color="#93c5fd" />
        <BlockCluster />
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={0.8} maxPolarAngle={1.35} />
      </Canvas>
    </div>
  );
}
