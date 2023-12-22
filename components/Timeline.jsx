"use client";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./Timeline.css";

import Image from "next/image";
import SNIG from "@/public/assets/images/home/carousel/campus_1.jpg";

const busRoute = [
	{
		code: "SNIG",
		name: "Sister Nivedita",
		additional: "Hall of Residence",
		image: SNIG,
	},
	{
		code: "RK",
		name: "Radha Krishnana",
		additional: "Hall of Residence",
		image: SNIG,
	},
	{
		code: "MS",
		name: "Meghnad Saha",
		additional: "Hall of Residence",
		image: SNIG,
	},
	{
		code: "LLR",
		name: "Lala Lajpat Roy",
		additional: "Hall of Residence",
		image: SNIG,
	},
	{
		code: "LBS",
		name: "Lal Bahadur Sashtri",
		additional: "Hall of Residence",
		image: SNIG,
	},
	{
		code: "PAN Loop",
		name: "PAN Loop Turn",
		additional: "",
		image: SNIG,
	},
	{
		code: "TSG",
		name: "Technology Students' Gymkhana",
		additional: "",
		image: SNIG,
	},
	{
		code: "Bidhan Chowk",
		name: "Bidhan Chowk U-Turn",
		additional: "",
		image: SNIG,
	},
	{
		code: "Clock Tower",
		name: "Clock Tower",
		additional: "",
		image: SNIG,
	},
	{
		code: "Vikramshila",
		name: "Vikramshila",
		additional: "",
		image: SNIG,
	},
	{
		code: "Nalanda",
		name: "Nalanda",
		additional: "",
		image: SNIG,
	},
	{
		code: "SNVH",
		name: "Sister Nivedita",
		additional: "Hall of Residence",
		image: SNIG,
	},
	{
		code: "TSG",
		name: "Technology Students' Gymkhana",
		additional: "",
		image: SNIG,
	},
	{
		code: "SNIG",
		name: "Sarojani Naidu/Indira Gandhi",
		additional: "Hall of Residence",
		image: SNIG,
	},
];

export default function Timeline() {
	return (
		<VerticalTimeline animate={true} lineColor={"#603d30"}>
			{busRoute.map((route) => (
				<VerticalTimelineElement
					visible={true}
					className={"vertical-timeline-element--work"}
					contentStyle={{
						background: "#F8EFE5",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #F8EFE5",
					}}
					date={route.code}
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
				>
					<div>
						<h3 className="vertical-timeline-element-title">
							{route.name}
						</h3>
						<p>{route.additional}</p>
					</div>
					<Image
						src={route.image}
						className="vertical-timeline-element-image"
					/>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
}
