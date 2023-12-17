import Link from "next/link";

export default function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <Link href="/admin/user">Users</Link>
      <br />
      <Link href="/admin/user/register">Register New User</Link>
      <br />
      <Link href="/admin/event">Event Registrations</Link>
      <br />
      <Link href="/admin/event/register">Register for Event</Link>
    </div>
  );
}
