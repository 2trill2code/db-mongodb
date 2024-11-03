"use client";

import { useState } from "react";

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

import { validateFields } from "@/lib/validation";
import baseURL from "@/service/config";
import { SearchQuery, PropertyListings } from "@/lib/types";

export type ListingFieldProps = {
  minBedrooms: number;
  maxBedrooms: number;
  propertyTypes: string[];
};

type ListingsFormProps = {
  query: SearchQuery;
  setQuery: (query: SearchQuery) => void;
  fields: ListingFieldProps;
  setResults: (results: PropertyListings[]) => void;
};

export default function ListingsForm({
  query,
  setQuery,
  fields,
  setResults,
}: ListingsFormProps) {
  const [errors, setErrors] = useState<string[]>([]);

  async function getResults() {
    const result = validateFields(query);
    if (!result.isValid) {
      setErrors(result.errors);
      setResults([]);
      return;
    }

    const url = `${baseURL}/listings?location=${query.location}&type=${
      query.type || ""
    }&bedrooms=${query.bedrooms || ""}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setResults([...data]);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getResults();
      }}
    >
      <h2 className="mb-2 text-2xl font-semibold">Find properties</h2>
      <div>
        <label htmlFor="location" className="block mb-2 font-medium text-lg">
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
        <label htmlFor="bedrooms" className="block mb-2 font-medium text-lg">
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
      <Button
        type="submit"
        className="w-full mb-5 font-medium text-md bg-primary-400"
      >
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
  );
}
