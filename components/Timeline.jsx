"use client";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./Timeline.css";

import Link from "next/link";
import Image from "next/image";
import SNIG from "@/public/assets/images/home/carousel/campus_1.jpg";

const busRoute = [
	{
		code: "SNIG",
		name: "Sarojani Naidu/Indira Gandhi",
		additional: "Hall of Residence",
		image: SNIG,
		location: "https://maps.app.goo.gl/vyWniws15TjqqdZ37",
	},
	{
		code: "RK",
		name: "Radha Krishnana",
		additional: "Hall of Residence",
		image: "/assets/images/halls/RK.jpg",
		location: "https://maps.app.goo.gl/xwcWcYBv7BaXWQPP7",
	},
	{
		code: "MS",
		name: "Meghnad Saha",
		additional: "Hall of Residence",
		image: "/assets/images/halls/MS.jpg",
		location: "https://maps.app.goo.gl/RAvGScyXM346PXib7",
	},
	{
		code: "LLR",
		name: "Lala Lajpat Roy",
		additional: "Hall of Residence",
		image: "/assets/images/halls/LLR.jpg",
		location: "https://maps.app.goo.gl/cKmUKwWH5oBeQW6w6",
	},
	{
		code: "LBS",
		name: "Lal Bahadur Shashtri",
		additional: "Hall of Residence",
		image: "/assets/images/halls/LBS.jpg",
		location: "https://maps.app.goo.gl/k4SgeJUsmAKXxDvk8",
	},
	{
		code: "PAN Loop",
		name: "PAN Loop Turn",
		additional: "Patel, Azad, Nehru, PFC",
		image: SNIG,
		location: "https://maps.app.goo.gl/NahEhJWf9ddor4j26",
	},
	{
		code: "TSG",
		name: "Technology Students' Gymkhana",
		additional: "Students' Activity Centre",
		image: "/assets/images/halls/TSG.jpg",
		location: "https://maps.app.goo.gl/ifiFbK1x7wdH7YF6A",
	},
	{
		code: "Bidhan Chowk",
		name: "Bidhan Chowk U-Turn",
		additional: "Main Building",
		image: "/assets/images/halls/Main_building.jpg",
		location: "https://maps.app.goo.gl/8D7iZjeonX36B7Hj8",
	},
	{
		code: "Clock Tower",
		name: "Clock Tower",
		additional:
			"Technology Food Court (TFC), Mother Teresa Hall of Residence",
		image: "/assets/images/halls/Clock_tower.jpg",
		location: "https://maps.app.goo.gl/ehgPTpG3PfwyziBk7",
	},
	{
		code: "Vikramshila",
		name: "Vikramshila",
		additional: "Takshshila, Kalidas, V1, V2, V3, V4",
		image: "/assets/images/halls/Takshshila.jpg",
		location: "https://maps.app.goo.gl/gr31VitBsDaV7NwcA",
	},
	{
		code: "Nalanda",
		name: "Nalanda",
		additional: "Classroom Complex",
		image: "/assets/images/halls/Nalanda.jpg",
		location: "https://maps.app.goo.gl/4gxuKuynFzNADUn9A",
	},
	{
		code: "SNVH",
		name: "Sister Nivedita",
		additional: "Hall of Residence",
		image: SNIG,
		location: "https://maps.app.goo.gl/DBs8dqyGQ2CWEhPY7",
	},
	{
		code: "TSG",
		name: "Technology Students' Gymkhana",
		additional: "Students' Activity Centre",
		image: "/assets/images/halls/TSG.jpg",
		location: "https://maps.app.goo.gl/ifiFbK1x7wdH7YF6A",
	},
	{
		code: "SNIG",
		name: "Sarojani Naidu/Indira Gandhi",
		additional: "Hall of Residence",
		image: SNIG,
		location: "https://maps.app.goo.gl/vyWniws15TjqqdZ37",
	},
];

export default function Timeline() {
	return (
		<VerticalTimeline animate={true} lineColor={"#603d30"}>
			{busRoute.map((route, idx) => (
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
						background: "#603d30",
						color: "#fff",
					}}
				>
					<div>
						<h3 className="vertical-timeline-element-title">
							{route.name}
						</h3>
						<p>{route.additional}</p>
						<Link href={route.location} target="_blank">
							<i className="fa-solid fa-map-location-dot"></i>{" "}
							Location
						</Link>
					</div>
					<Image
						src={route.image}
						width={1000}
						height={1000}
						className="vertical-timeline-element-image"
					/>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
}
