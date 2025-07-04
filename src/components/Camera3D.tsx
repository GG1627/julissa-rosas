import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

function CameraModel() {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/3d/camera.glb");

  // Auto-rotate the camera slowly
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Slow constant rotation
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={scene} scale={[1.4, 1.4, 1.4]} position={[0, 0, 0]} />
    </group>
  );
}

export default function Camera3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.1} />

        {/* Environment for reflections */}
        <Environment preset="night" />

        {/* Camera Model */}
        <CameraModel />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
