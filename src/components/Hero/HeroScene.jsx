import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import CameraRig from "./CameraRig";

function HouseModel() {
    const { scene } = useGLTF("/models/luxury-house.glb");

    return (
        <primitive
            object={scene}
            scale={0.00055}
            position={[0.33, -0.02, 0.11]}
        />
    );
}

function HeroScene() {
    return (
        <Suspense fallback={null}>
            <HouseModel />
            <CameraRig />
        </Suspense>
    );
}

useGLTF.preload("/models/luxury-house.glb");

export default HeroScene;