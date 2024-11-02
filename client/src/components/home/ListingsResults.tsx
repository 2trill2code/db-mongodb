// add query for extra

import { /* BookingQuery ,*/ PropertyListings } from "@/lib/types";
import PropertyCard from "../PropertyCard";

export default function ListingsResults({
  results,
}: // query,
{
  results: PropertyListings[];
  // query: BookingQuery;
}) {
  return (
    <>
      {results.length === 0 ? (
        <h2 className="text-center">
          {/* No results found for a {query.bedrooms || "n"} bedroom{" "}
          {query.type?.toLowerCase() || "property"} in{" "}
          {query.location || "unknown"}. */}
          Use the search form to find properties
        </h2>
      ) : (
        results.map((result) => (
          <PropertyCard key={result.id} property={result} />
        ))
      )}
    </>
  );
}
