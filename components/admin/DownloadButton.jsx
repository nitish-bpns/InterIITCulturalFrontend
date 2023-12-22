import { useState } from "react";
import { useRouter } from "next/navigation";
import { CSVLink } from "react-csv";
import { Button, Spinner } from "react-bootstrap";
import { toast, toastDict } from "@/lib/toastify";

export default function DownloadButton(props) {
	const router = useRouter();

	const { endpoint, downloadHeaders } = props;

	const [downloadData, setDownloadData] = useState(null);
	const [loading, setLoading] = useState(false);

	const getDownloadData = async () => {
		if (!localStorage.getItem("interiit-cultural-token")) {
			router.push("/");
		}
		try {
			setLoading(true);
			const res = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token: localStorage.getItem("interiit-cultural-token"),
				}),
			});
			const data = await res.json();
			if (!data) {
				toast.error("Data not found.", toastDict);
				router.push("/admin");
				return;
			}
			setDownloadData(data);
			setLoading(false);
			setTimeout(() => {
				document
					.getElementsByClassName("csv-download-button")[0]
					.click();
			}, 1000);
		} catch (error) {
			toast.error("Something went wrong! Please try again.", toastDict);
		}
	};

	return downloadData ? (
		<CSVLink
			className="btn btn-primary csv-download-button"
			filename={"Downloaded Data - " + new Date().toDateString() + ".csv"}
			data={downloadData}
			headers={downloadHeaders}
			onClick={() => {
				setDownloadData(null);
			}}
		>
			Download Data
		</CSVLink>
	) : (
		<Button className="primary" onClick={getDownloadData}>
			{loading ? (
				<Spinner animation="border" size="sm" />
			) : (
				"Download Data"
			)}
		</Button>
	);
}
