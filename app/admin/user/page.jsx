import Link from "next/link";

export default function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Link href="/admin/user/register">Register New User</Link>
    </div>
  );
}
