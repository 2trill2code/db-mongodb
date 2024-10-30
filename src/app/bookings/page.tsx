"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { useState } from "react";

export default function Home() {
  // const [query, setQuery] = useState({
  //   location: "",
  //   type: "",
  //   bedrooms: "",
  // });

  return (
    <main className="container flex flex-col items-center gap-7 py-5">
      <section className="p-7 w-2/4 bg-secondary-200 rounded-xl shadow-md">
        <h2 className="mb-2 text-2xl font-semibold">Booking Details</h2>
        <form action="">
          {/* fix need 50% later */}
          <div className="flex gap-5">
            <div>
              <label
                htmlFor="checkIn"
                className="block mb-2 font-medium text-lg"
              >
                Check in date
              </label>
            </div>
            <div>
              <label
                htmlFor="checkOut"
                className="block mb-2 font-medium text-lg"
              >
                Check out date
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-lg">
              Name
            </label>
            <Input
              id="name"
              // onChange={(e) => {
              //   setQuery({ ...query, location: e.target.value });
              // }}
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
              // onChange={(e) => {
              //   setQuery({ ...query, location: e.target.value });
              // }}
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
              // onChange={(e) => {
              //   setQuery({ ...query, location: e.target.value });
              // }}
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
              // onChange={(e) => {
              //   setQuery({ ...query, location: e.target.value });
              // }}
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
              // onChange={(e) => {
              //   setQuery({ ...query, location: e.target.value });
              // }}
              className="mb-4"
              placeholder="Enter your residential address"
            />
          </div>
          <Button className="w-full font-medium text-md bg-primary-400">
            Search
          </Button>
        </form>
      </section>
    </main>
  );
}
