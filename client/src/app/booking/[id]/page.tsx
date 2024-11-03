"use client";

import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/DatePicker";

import { PropertyListings } from "@/lib/types";
import baseURL from "@/service/config";
import { BookingQuery } from "@/lib/types";
import { validateBookingFields } from "@/lib/validation";

export default function PropertyBooking({
  params,
}: {
  params: { id: string };
}) {
  const [query, setQuery] = useState<BookingQuery>({
    name: "",
    email: "",
    mobile: "",
    postalAddress: "",
    residentialAddress: "",
    checkInDate: new Date(),
    checkOutDate: undefined,
  });
  const [errors, setErrors] = useState<string[]>([]);
  const listingId = params.id;
  const [listing, setListing] = useState<PropertyListings | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchListing() {
      const res = await fetch(`${baseURL}/listings/${listingId}`);
      const data = await res.json();
      setListing(() => data);
    }

    fetchListing();
  }, [listingId]);

  async function bookProperty() {
    const result = validateBookingFields(query);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    const url = `${baseURL}/bookings`;
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ ...query, listingId }),
    });
  }

  return (
    <main className="container flex flex-col items-center gap-7 py-5">
      <section className="p-7 w-2/4 bg-secondary-200 rounded-xl shadow-md">
        <h2 className="mb-2 text-2xl font-semibold">Booking Details</h2>
        <p>Listing Id: {listingId}</p>

        <p>Name: {listing?.name || "unknown"}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            bookProperty();
          }}
        >
          <div className="flex gap-5">
            <div className="mb-5">
              <label
                htmlFor="checkIn"
                className="block mb-2 font-medium text-lg"
              >
                Check in date
              </label>
              <DatePicker
                date={query.checkInDate}
                selected={query.checkInDate}
                onSelect={(date) => {
                  setQuery({ ...query, checkInDate: date });
                }}
                mode="single"
                initialFocus
              />
            </div>
            <div>
              <label
                htmlFor="checkOut"
                className="block mb-2 font-medium text-lg"
              >
                Check out date
              </label>
              <DatePicker
                date={query.checkOutDate}
                selected={query.checkOutDate}
                onSelect={(date) => {
                  setQuery({ ...query, checkOutDate: date });
                }}
                mode="single"
                initialFocus
              />
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-lg">
              Name
            </label>
            <Input
              id="name"
              onChange={(e) => {
                setQuery({ ...query, name: e.target.value });
              }}
              className="mb-4"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-lg">
              Email
            </label>
            <Input
              id="email"
              onChange={(e) => {
                setQuery({ ...query, email: e.target.value });
              }}
              className="mb-4"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block mb-2 font-medium text-lg">
              Mobile Number
            </label>
            <Input
              id="mobile"
              onChange={(e) => {
                setQuery({ ...query, mobile: e.target.value });
              }}
              className="mb-4"
              placeholder="Enter your mobile number"
            />
          </div>
          <div>
            <label
              htmlFor="postalAddress"
              className="block mb-2 font-medium text-lg"
            >
              Postal Address
            </label>
            <Input
              id="postalAddress"
              onChange={(e) => {
                setQuery({ ...query, postalAddress: e.target.value });
              }}
              className="mb-4"
              placeholder="Enter your postal address"
            />
          </div>
          <div>
            <label
              htmlFor="residentialAddress"
              className="block mb-2 font-medium text-lg"
            >
              Postal Address
            </label>
            <Input
              id="residentialAddress"
              onChange={(e) => {
                setQuery({ ...query, residentialAddress: e.target.value });
              }}
              className="mb-4"
              placeholder="Enter your residential address"
            />
          </div>
          <Button className="w-full font-medium text-md bg-primary-400">
            Search
          </Button>
          <div>
            {errors.length > 0 && (
              <ul className="text-red-500">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}
