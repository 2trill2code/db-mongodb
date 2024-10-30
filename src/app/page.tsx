"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container flex flex-col items-center gap-7 py-5">
      <section className="p-7 w-2/4 bg-secondary-200 rounded-xl shadow-md">
        <h2 className="mb-2 text-2xl font-semibold">Find properties</h2>
        <form action="">
          <div>
            <label
              htmlFor="location"
              className="block mb-2 font-medium text-lg"
            >
              Location
            </label>
            <Input
              id="location"
              onChange={() => {
                console.log("damn peggy");
              }}
              className="mb-4"
              placeholder="Enter a location"
            />
          </div>
          <div>
            <label htmlFor="type" className="block mb-2 font-medium text-lg">
              Property type
            </label>
          </div>
          <div>
            <label
              htmlFor="bedrooms"
              className="block mb-2 font-medium text-lg"
            >
              Location
            </label>
          </div>
          <div>
            <Button className="w-full font-medium text-md bg-primary-400">
              Search
            </Button>
          </div>
        </form>
      </section>

      <section className="p-7 bg-secondary-100 rounded-xl shadow-md">
        <h2>stuff</h2>
      </section>
    </main>
  );
}
