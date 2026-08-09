import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function CameraRig() {
    const { camera } = useThree();

    const basePosition = useRef(
        new THREE.Vector3(7, 4.2, 9)
    );

    const target = useRef(
        new THREE.Vector3(0, 1.1, 0)
    );

    const currentTarget = useRef(
        new THREE.Vector3(0, 1.1, 0)
    );

    useFrame(() => {

        /*
         * STATIC CINEMATIC CAMERA
         * No automatic movement.
         * No mouse movement.
         */

        camera.position.lerp(
            basePosition.current,
            0.035
        );

        currentTarget.current.lerp(
            target.current,
            0.035
        );

        camera.lookAt(
            currentTarget.current
        );
    });

    return null;
}

export default CameraRig;