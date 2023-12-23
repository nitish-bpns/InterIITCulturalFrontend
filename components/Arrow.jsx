import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Arrow(props) {
  const { nodes, materials } = useGLTF('/Arrow.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Arrow5_Arrow5_0.geometry} material={materials['Outsides.001']} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} />
    </group>
  )
}