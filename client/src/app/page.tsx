"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import baseURL from "@/service/config";
import { BookingQuery } from "@/lib/types";

export default function Home() {
  const [query, setQuery] = useState<BookingQuery>({
    location: "",
    type: undefined,
    bedrooms: undefined,
  });

  const [fields, setFields] = useState({
    minBedrooms: 0,
    maxBedrooms: 0,
    propertyTypes: [],
  });

  const results: string[] = [];

  useEffect(() => {
    async function getbedrooms() {
      const response = await fetch(`${baseURL}/listings/bedrooms`);
      const data = await response.json();
      setFields((prevFields) => ({
        ...prevFields,
        minBedrooms: data.min,
        maxBedrooms: data.max,
      }));
    }

    async function getproperties() {
      const response = await fetch(`${baseURL}/listings/types`);
      const data = await response.json();
      setFields((prevFields) => ({
        ...prevFields,
        propertyTypes: data.propertyTypes,
      }));
    }

    getbedrooms();
    getproperties();
  }, []);

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
              onChange={(e) => {
                setQuery({ ...query, location: e.target.value });
              }}
              className="mb-4"
              placeholder="Enter a location"
            />
          </div>
          <div>
            <label htmlFor="type" className="block mb-2 font-medium text-lg">
              Property type
            </label>
            <Select
              onValueChange={(i) => {
                setQuery({ ...query, type: i });
              }}
            >
              <SelectTrigger className="mb-4">
                <SelectValue placeholder="Select a property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {fields.propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="bedrooms"
              className="block mb-2 font-medium text-lg"
            >
              Bedrooms
            </label>
            <Select
              onValueChange={(i) => {
                setQuery({ ...query, bedrooms: i });
              }}
            >
              <SelectTrigger className="mb-4">
                <SelectValue placeholder="Choose number of bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* min - max */}
                  {Array.from({
                    length: fields.maxBedrooms - fields.minBedrooms + 1,
                  }).map((_, index) => (
                    <SelectItem
                      key={index + fields.minBedrooms}
                      value={(index + fields.minBedrooms).toString()}
                    >
                      {index + fields.minBedrooms}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button className="w-full font-medium text-md bg-primary-400">
              Search
            </Button>
          </div>
        </form>
      </section>

      <section className="p-7 w-2/4 bg-secondary-100 rounded-xl shadow-md">
        {results.length === 0 ? (
          <h2 className="text-center">
            No results found for a {query.bedrooms || "n"} bedroom{" "}
            {query.type?.toLowerCase() || "property"} in{" "}
            {query.location || "unknown"}.
          </h2>
        ) : (
          results.map((result: string) => <p key={result}>{result}</p>)
        )}
      </section>
    </main>
  );
}
