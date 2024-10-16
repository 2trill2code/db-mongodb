"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Home() {
  return <main>
    <section>
      <h2>Find properties</h2>
      <form action="">
        <div>
          <label htmlFor="location" className="block mb-2">Location</label>
          <Input id="location" onChange={() => {console.log("damn peggy")}} placeholder="Enter a location"/>
        </div>
        <div>
          <label htmlFor="type" className="block mb-2">Location</label>
        </div>
        <div>
          <label htmlFor="bedrooms" className="block mb-2">Location</label>
        </div>
      </form>
    </section>
    <section>
      <h2>stuff</h2>
    </section>
  </main>
}
