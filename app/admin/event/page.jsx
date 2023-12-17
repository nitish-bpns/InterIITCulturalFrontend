import Link from "next/link";

export default function Events() {
  return (
    <div>
      <h1>Event Registrations</h1>
      <Link href="/admin/event/register">Register for Event</Link>
    </div>
  );
}
