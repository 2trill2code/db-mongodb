"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ConfirmationPage() {
  const searchParam = useSearchParams();
  const listingID = searchParam.get("listingID");

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2>BookingConfirmed</h2>
      <p>Id: {listingID}</p>
      <Link href="/" className="hover:underline">
        Return home?
      </Link>
    </main>
  );
}
