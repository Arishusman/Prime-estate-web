import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
    Environment,
    Preload
} from "@react-three/drei";
import HeroScene from "./HeroScene";

function HeroCanvas() {
    return (
        <div className="hero-canvas">

            <Canvas
                camera={{
                    position: [7, 4.2, 9],
                    fov: 42,
                    near: 0.01,
                    far: 100,
                }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                shadows
            >

                <Suspense fallback={null}>

                    {/* Soft architectural fill */}
                    <ambientLight
                        intensity={1.8}
                    />

                    {/* Main sunlight */}
                    <directionalLight
                        position={[6, 10, 8]}
                        intensity={3}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                    />

                    {/* Front fill */}
                    <directionalLight
                        position={[0, 5, 10]}
                        intensity={1.5}
                    />

                    {/* Side architectural light */}
                    <directionalLight
                        position={[-8, 4, 2]}
                        intensity={1.2}
                    />

                    {/* Reflections */}
                    <Environment
                        preset="city"
                        environmentIntensity={0.9}
                    />

                    <HeroScene />

                    <Preload all />

                </Suspense>

            </Canvas>

        </div>
    );
}

export default HeroCanvas;