import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Map(props) {
  const { nodes, materials } = useGLTF('/map.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.001, 0, 0]} rotation={[-Math.PI / 2, 0, 0.005]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group scale={100}>
            <mesh geometry={nodes.Plane_Insides_0.geometry} material={materials.Insides} />
            <mesh geometry={nodes.Plane_Outsides_0.geometry} material={materials.Outsides} />
          </group>
        </group>
      </group>
    </group>
  )
}