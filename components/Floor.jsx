"use client";

import React, { useRef } from "react";
// import { Model } from "./model";
import { OrbitControls, Text, Image } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Model } from "./Model";
import { Map } from "./Map";
import { Canvas } from "@react-three/fiber";
import { PointLight } from "three";
import { Arrow } from "./Arrow";

function Floor(props) {
  return (
    <mesh {...props} recieveshadow>
      <Canvas
        shadows={true}
        // linear={true}
        // flat={true}
        // colorManagement={true}
        // concurrect={true}
        // frameloop="always"
        // concurrent
        // draggable={true}
        camera={{
          fov: 30,
          position: [0, 2, 4],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} shadow={true} />

        {/* Main gate arrow */}
        <Arrow
          scale={0.25}
          position={[0.68, 0.02, -0.8]}
          rotation={[0, -2, 0]}
        />
        <Text
          position={[0.68, 0.04, -0.8]}
          rotation={[0, -2, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Main Gate
        </Text>

        {/* Main Building location */}
        <Map
          scale={0.01}
          position={[0.62, 0.125, -0.278]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[0.62, 0.15, -0.278]}
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
          position={[0.43, 0.04, -0.08]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[0.43, 0.071, -0.08]}
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
          position={[0.58, 0.04, -0.13]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[0.58, 0.07, -0.13]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Netaji Auditorium
        </Text>

        {/* TOAT location */}
        <Map scale={0.01} position={[0.34, 0.03, 0]} rotation={[0, -1.5, 0]} />
        <Text
          position={[0.34, 0.06, 0]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Arena
        </Text>

        {/* Jnan ghosh Stadium Location */}
        <Map scale={0.01} position={[-0.18, 0.02, 0]} rotation={[0, -1.5, 0]} />
        <Text
          position={[-0.18, 0.05, 0]}
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
          position={[0.85, 0.03, 0.26]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[0.85, 0.06, 0.26]}
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
          position={[1.45, 0.11, -0.24]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[1.45, 0.14, -0.24]}
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
          position={[1.69, 0.05, 0.16]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[1.69, 0.08, 0.16]}
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
          position={[-0.55, 0.03, -0.065]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[-0.55, 0.06, -0.065]}
          rotation={[0, -1.5, 0]}
          scale={0.02}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Gymkhana
        </Text>

        {/* Swimming Pool location */}
        <Map
          scale={0.01}
          position={[-0.72, 0.025, 0.1]}
          rotation={[0, -1.5, 0]}
        />
        <Text
          position={[-0.72, 0.055, 0.1]}
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
          position={[-1, 0.5, -1]}
          shadow={true}
        />
        {/* <fog attach="fog" color="white" near={1} far={15} /> */}

        <OrbitControls
          enablePan={true}
          autoRotate={true}
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
      {/* </OrbitControls> */}
    </mesh>
  );
}

export default Floor;
