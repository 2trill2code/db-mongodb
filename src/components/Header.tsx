import Link from "next/link";

export default function Header() {
  return (
    <header className="container p-5 flex items-center gap-5">
      <h1 className="text-xl font-semibold">AirBnB Database Web Interface</h1>
      <div className="flex gap-3">
        <Link href="/stuff" className="hover:underline">
          Bookings
        </Link>
      </div>
    </header>
  );
}
