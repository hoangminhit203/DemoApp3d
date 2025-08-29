import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function SpinningSphere() {
    const meshRef = useRef<Mesh | null>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.x += 0.005;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <meshStandardMaterial
                color="orange"
                metalness={0.2}
                roughness={0.1}
            />
        </mesh>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-2, 2, 2]} intensity={0.5} color="#ff6b6b" />
            <pointLight position={[2, -2, -2]} intensity={0.5} color="#4ecdc4" />
            <SpinningSphere />
            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                minDistance={2}
                maxDistance={8}
            />
        </>
    );
}

export default function ThreeScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 4] }}
            style={{ width: '100%', height: '100%' }}
        >
            <Scene />
        </Canvas>
    );
}
