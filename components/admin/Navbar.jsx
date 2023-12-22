import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Image from "next/image";
import eventsData from "@/data/events.json";
import ILU from "@/public/assets/images/ILU.png";
import "./Navbar.css";

export default function AdminNavbar() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="/">
					<Image src={ILU} alt="Logo" height="30" />
					Inter IIT Cultural 6.0 Admin
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/admin/user">All Participants</Nav.Link>
						<Nav.Link href="/admin/user/register">
							Add Participant
						</Nav.Link>
						<NavDropdown
							title="Event Registrations"
							id="basic-nav-dropdown"
						>
							{Object.keys(eventsData).map((genre) => {
								const events = eventsData[genre].events;
								const obj = Object.keys(events).map(
									(event, index) => (
										<NavDropdown.Item
											key={index}
											href={
												"/admin/event/" +
												genre +
												"/" +
												event
											}
										>
											{eventsData[genre].properName +
												" - " +
												events[event].name}
										</NavDropdown.Item>
									)
								);
								return obj;
							})}
						</NavDropdown>
						<Nav.Link href="/admin/event/register">
							Register for Event
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
