import { Table, Pagination, Placeholder, Card, Button } from "react-bootstrap";
import Link from "next/link";
import institutes from "@/data/institutes.json";

export default function DataTable(props) {
	const {
		columns,
		eid,
		data,
		count,
		tableControls: { page, length, sortField, sortDir },
		setTableControls,
		deregister,
		downloadButton,
	} = props;

	const controls = (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<Button variant="primary">Total : {count}</Button>
			<div>
				Page :
				<Pagination>
					{page > 2 && (
						<Pagination.Item
							onClick={() => {
								setTableControls({
									...props.tableControls,
									page: 1,
								});
							}}
						>
							{1}
						</Pagination.Item>
					)}
					{page > 3 && <Pagination.Ellipsis />}
					{page > 1 && (
						<Pagination.Item
							onClick={() => {
								setTableControls({
									...props.tableControls,
									page: page - 1,
								});
							}}
						>
							{page - 1}
						</Pagination.Item>
					)}
					<Pagination.Item active>{page}</Pagination.Item>
					{page < Math.ceil(count / length) && (
						<Pagination.Item
							onClick={() => {
								setTableControls({
									...props.tableControls,
									page: page + 1,
								});
							}}
						>
							{page + 1}
						</Pagination.Item>
					)}
					{page < Math.ceil(count / length) - 2 && (
						<Pagination.Ellipsis />
					)}
					{page < Math.ceil(count / length) - 1 && (
						<Pagination.Item
							onClick={() => {
								setTableControls({
									...props.tableControls,
									page: Math.ceil(count / length),
								});
							}}
						>
							{Math.ceil(count / length)}
						</Pagination.Item>
					)}
				</Pagination>
			</div>
			<div>
				Show rows per page:
				<Pagination>
					{Array(10, 20, 50, 100).map((val) => (
						<Pagination.Item
							key={val}
							active={length == val}
							onClick={() => {
								setTableControls({
									...props.tableControls,
									length: val,
									page: 1,
								});
							}}
						>
							{val}
						</Pagination.Item>
					))}
				</Pagination>
			</div>
			{downloadButton}
		</div>
	);
	return (
		<>
			{controls}
			<Table striped>
				<thead>
					<tr>
						{Object.keys(columns).map((val, index) => (
							<th
								key={index}
								onClick={() => {
									if (
										sortField == val ||
										(val == "insti" &&
											sortField == "instituteID")
									)
										setTableControls({
											...props.tableControls,
											sortDir: -sortDir,
										});
									else {
										setTableControls({
											...props.tableControls,
											page: 1,
											sortField:
												val == "insti"
													? "instituteID"
													: val,
											sortDir: 1,
										});
									}
								}}
								style={{
									cursor: "pointer",
								}}
							>
								{columns[val] + " "}
								{(sortField == val ||
									(val == "insti" &&
										sortField == "instituteID")) &&
									(sortDir > 0 ? (
										<i
											className="fa fa-caret-up"
											aria-hidden="true"
										></i>
									) : (
										<i
											className="fa fa-caret-down"
											aria-hidden="true"
										></i>
									))}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((part, idx) => (
						<tr key={idx}>
							{Object.keys(columns).map((val, index) => (
								<td key={index}>
									{val in part ? (
										val == "_id" ? (
											sortDir == -1 ? (
												count -
												(length * (page - 1) + idx)
											) : (
												length * (page - 1) + idx + 1
											)
										) : val == "name" ? (
											<Link
												href={
													"/admin/user/" + part.email
												}
												style={{
													textDecoration: "none",
												}}
											>
												{part[val]}
											</Link>
										) : val.startsWith("email") ? (
											<>
												{part[val]
													.split(", ")
													.map((email) => (
														<>
															<Link
																href={
																	"/admin/user/" +
																	email
																}
															>
																{email}
															</Link>{" "}
															<a
																style={{
																	cursor: "pointer",
																	color: "blue",
																}}
																onClick={(
																	e
																) => {
																	navigator.clipboard.writeText(
																		email
																	);
																	e.target.innerHTML =
																		"Copied!";
																	e.target.style.color =
																		"green";
																	setTimeout(
																		() => {
																			e.target.innerHTML =
																				"Copy Email";
																			e.target.style.color =
																				"blue";
																		},
																		1000
																	);
																}}
															>
																Copy Email
															</a>
															<br />
														</>
													))}
											</>
										) : val == "instituteID" ? ( //for users table
											institutes[part[val]]
										) : val == "insti" ? ( //for events table
											<Link
												href={
													"/admin/event/details/" +
													part["_id"].valueOf()
												}
											>
												{institutes[part[val]]}
											</Link>
										) : (
											part[val]
										)
									) : (
										<Placeholder
											as={Card.Text}
											animation="glow"
										>
											<Placeholder xs={6} />
										</Placeholder>
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</Table>
			{controls}
		</>
	);
}
