import eventsData from "@/data/events.json";
import ErrorPage from "@/components/ErrorPage";

export default function Events({ params }) {
	const genre = params.genre;
	const event = params.event;

	if (!eventsData[genre] || !eventsData[genre].events[event]) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<div>
			<h1>
				Event Registrations - {eventsData[genre].events[event].name}
			</h1>
		</div>
	);
}
