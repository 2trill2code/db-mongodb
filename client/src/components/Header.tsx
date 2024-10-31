import Link from "next/link";

export default function Header() {
  return (
    <header className="p-5 flex items-center gap-5 bg-secondary-200 shadow-md">
      <h1 className="text-xl font-semibold text-primary-500 hover:bg-gradient-to-r from-primary-500 via-primary-300 to-purple-500 hover:text-transparent bg-clip-text transition-all">
        <Link href="/">AirBnB Database Web Interface</Link>
      </h1>
      <div className="flex gap-3">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {/* <Link href="/booking" className="hover:underline">
          Booking
        </Link> */}
      </div>
    </header>
  );
}
