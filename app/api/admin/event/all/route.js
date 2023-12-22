import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { verifyToken } from "@/lib/jwt";
import EventReg from "@/models/EventReg";

export async function POST(req) {
	const {
		token,
		code,
		sortField,
		limit,
		first,
		sortDir,
		search,
		searchField,
	} = await req.json();

	if (!code) {
		return NextResponse.json(
			{
				message: "Please provide an event code!",
			},
			{
				status: 401,
			}
		);
	}

	try {
		await connectToDatabase();

		const adminUser = await verifyToken(token);
		if (!adminUser.isAdmin) {
			return NextResponse.json(
				{
					message: "You are not authorized to perform this action!",
				},
				{
					status: 401,
				}
			);
		}

		const count = await EventReg.find({
			[searchField ? searchField : "instituteID"]: new RegExp(
				search ? search.replace(/[^a-zA-Z0-9- ]/g, "") : "",
				"i"
			),
			eventCode: code,
		})
			.count()
			.exec();
		const teams = await EventReg.aggregate(
			[
				{
					$match: {
						eventCode: code,
						[searchField ? searchField : "instituteID"]: new RegExp(
							search ? search.replace(/[^a-zA-Z0-9- ]/g, "") : "",
							"i"
						),
					},
				},
				{
					$sort: {
						[sortField ? sortField : "_id"]: Number(
							sortDir ? sortDir : 1
						),
					},
				},
				{
					$skip: Number(first ? first : 0),
				},
				{
					$limit: Number(limit ? (limit > 100 ? 100 : limit) : 10),
				},
			],
			{
				collation: { locale: "en" },
			}
		);
		return NextResponse.json(
			{
				teams,
				count,
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{
				status: 401,
			}
		);
	}
}
