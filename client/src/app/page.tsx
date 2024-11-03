"use client";

import { useEffect, useState } from "react";

import baseURL from "@/service/config";
import { SearchQuery, PropertyListings } from "@/lib/types";
import ListingsForm, {
  ListingFieldProps,
} from "@/components/home/ListingsForm";
import ListingsResults from "@/components/home/ListingsResults";

export default function Home() {
  const [query, setQuery] = useState<SearchQuery>({
    location: "",
    type: undefined,
    bedrooms: undefined,
  });

  const [fields, setFields] = useState<ListingFieldProps>({
    minBedrooms: 0,
    maxBedrooms: 0,
    propertyTypes: [],
  });

  const [results, setResults] = useState<PropertyListings[]>([]);

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
        <ListingsForm
          query={query}
          setQuery={setQuery}
          fields={fields}
          setResults={setResults}
        />
      </section>

      <section className="p-7 w-2/4 bg-secondary-100 rounded-xl shadow-md">
        <ListingsResults results={results} />
      </section>
    </main>
  );
}
