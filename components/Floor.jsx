"use client";

import React from "react";
import { useState } from "react";
import { OrbitControls, Text, Image } from "@react-three/drei";
import { Model } from "./Model";
import { Map } from "./Map";
import { Canvas } from "@react-three/fiber";
import { Arrow } from "./Arrow";

import Styles from "./ModelView.module.css";

import locations from "@/data/map.json";

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
				{/* Loop of location points */}
				{locations.items.map((item, idx) => (
					<React.Fragment key={idx}>
						<Map
							scale={0.01}
							position={item.pin}
							rotation={[0, -1.5, 0]}
						/>
						<Text
							position={item.text}
							rotation={[0, -1.5, 0]}
							scale={0.02}
							color="black"
							anchorX="center"
							anchorY="middle"
						>
							{item.name}
						</Text>
					</React.Fragment>
				))}
				{/* <directionalLight color="white" intensity={1} position={[0.5, 1, 1]} /> */}
				<directionalLight
					color="white"
					intensity={1.7}
					position={[-1.5, 0.5, -1.5]}
					shadow={true}
				/>
				{/* <fog attach="fog" color="white" near={1} far={15} /> */}
				{/* </OrbitControls> */}
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
					<label
						for="toggle"
						className={Styles["toggle"] + " " + Styles["on"]}
					>
						ON
					</label>
				</>
			</div>
		</mesh>
	);
}

export default Floor;
