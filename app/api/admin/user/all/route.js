import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { verifyToken } from "@/lib/jwt";
import User from "@/models/User";

export async function POST(req) {
	const { token, sortField, limit, first, sortDir, search, searchField } =
		await req.json();
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

		const count = await User.find({
			[searchField ? searchField : "name"]: new RegExp(
				search ? search.replace(/[^a-zA-Z0-9- ]/g, "") : "",
				"i"
			),
		})
			.count()
			.exec();
		const users = await User.aggregate(
			[
				{
					$match: {
						[searchField ? searchField : "name"]: new RegExp(
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
				users,
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
