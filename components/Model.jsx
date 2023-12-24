import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Model.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.62, 0, 0.278]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.0015}
      >
        <mesh
          geometry={nodes.final_map001_1.geometry}
          material={materials["Custom (5)"]}
        />
        <mesh
          geometry={nodes.final_map001_2.geometry}
          material={materials["Custom (2)"]}
        />
        <mesh
          geometry={nodes.final_map001_3.geometry}
          material={materials["Custom (1)"]}
        />
        <mesh
          geometry={nodes.final_map001_4.geometry}
          material={materials.Plaster}
        />
        <mesh
          geometry={nodes.final_map001_5.geometry}
          material={materials["Custom (24)"]}
        />
        <mesh
          geometry={nodes.final_map001_6.geometry}
          material={materials.diffuse_0}
        />
        <mesh
          geometry={nodes.final_map001_7.geometry}
          material={materials["Plaster (2)"]}
        />
        <mesh
          geometry={nodes.final_map001_8.geometry}
          material={materials["Plaster (3)"]}
        />
        <mesh
          geometry={nodes.final_map001_9.geometry}
          material={materials["Plaster (1)"]}
        />
        <mesh
          geometry={nodes.final_map001_10.geometry}
          material={materials["Custom (3)"]}
        />
        <mesh
          geometry={nodes.final_map001_11.geometry}
          material={materials.Custom}
        />
        <mesh
          geometry={nodes.final_map001_12.geometry}
          material={materials["Custom (4)"]}
        />
      </group>
    </group>
  );
}
