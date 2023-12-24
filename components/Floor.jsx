"use client";

import { useState } from "react";
import { OrbitControls, Text, Image } from "@react-three/drei";
import { Model } from "./Model";
import { Map } from "./Map";
import { Canvas } from "@react-three/fiber";
import { Arrow } from "./Arrow";

import Styles from "./ModelView.module.css";

function Floor(props) {
  const [rotation, setRotation] = useState(true);

  return (
    <mesh {...props} recieveshadow>
      <Canvas
        shadows={true}
        camera={{
          fov: 30,
          position: [-0.3, 0.17, 0.2],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} shadow={true} />

        {/* Main gate arrow */}
        <Arrow
          scale={0.25}
          position={[0.06, 0.02, -0.55]}
          rotation={[0, -2, 0]}
        />
        <Text
          position={[0.06, 0.04, -0.51]}
          rotation={[0, -2, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Main Gate
        </Text>

        {/* Main Building location */}
        <Map scale={0.01} position={[0, 0.13, 0]} rotation={[0, -1.5, 0]} />
        <Text
          position={[0, 0.16, 0]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Main Building
        </Text>

        {/* TOAT location */}
        <Map
          scale={0.01}
          position={[-0.19, 0.04, 0.198]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[-0.19, 0.071, 0.198]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          TOAT
        </Text>

        {/* Netaji Auditorium location */}
        <Map
          scale={0.01}
          position={[-0.04, 0.04, 0.148]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[-0.04, 0.07, 0.148]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Netaji Auditorium
        </Text>

        {/* Arena location */}
        <Map
          scale={0.01}
          position={[-0.28, 0.03, 0.278]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[-0.28, 0.06, 0.278]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Arena
        </Text>

        {/* Jnan ghosh Stadium Location */}
        <Map
          scale={0.01}
          position={[-0.8, 0.02, 0.278]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[-0.8, 0.05, 0.278]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Jnan Ghosh Stadium
        </Text>

        {/* Vikramshila location */}
        <Map
          scale={0.01}
          position={[0.23, 0.03, 0.538]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[0.23, 0.06, 0.538]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Vikramshila Complex
        </Text>

        {/* Nehru Museum */}
        <Map
          scale={0.01}
          position={[0.83, 0.11, 0.038]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[0.83, 0.14, 0.038]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Nehru Museum
        </Text>

        {/* Nalanda Classroom Complex */}
        <Map
          scale={0.01}
          position={[1.07, 0.05, 0.438]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[1.07, 0.08, 0.438]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Nalanda Classroom Complex
        </Text>

        {/* Gymkhana location */}
        <Map
          scale={0.01}
          position={[-1.17, 0.03, 0.213]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[-1.17, 0.06, 0.213]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
          direction=""
        >
          Gymkhana
        </Text>

        {/* Swimming Pool location */}
        <Map
          scale={0.01}
          position={[-1.34, 0.025, 0.378]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[-1.34, 0.055, 0.378]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Swimming Pool
        </Text>

        {/* <directionalLight color="white" intensity={1} position={[0.5, 1, 1]} /> */}
        <directionalLight
          color="white"
          intensity={1.7}
          position={[-1.5, 0.5, -1.5]}
          shadow={true}
        />
        {/* <fog attach="fog" color="white" near={1} far={15} /> */}

        <OrbitControls
          enablePan={true}
          autoRotate={rotation}
          autoRotateSpeed={1}
          enableZoom={true}
          maxDistance={6}
          minDistance={0.5}
          maxZoom={1}
          minZoom={50}
          maxPolarAngle={Math.PI / 2}
        />
        <Model />
      </Canvas>

      <div className={Styles["toggle-button"]}>
        <h4>Auto Rotation</h4>
        <input
          type="checkbox"
          id="toggle"
          className={Styles["disabledCheck"]}
          checked={rotation}
          onClick={() => {
            setRotation(!rotation);
          }}
        />
        <>
          <label
            for="toggle"
            className={Styles["toggle"] + " " + Styles["off"]}
          >
            OFF
          </label>
          <label for="toggle" className={Styles["toggle"] + " " + Styles["on"]}>
            ON
          </label>
        </>
      </div>
      {/* </OrbitControls> */}
    </mesh>
  );
}

export default Floor;
