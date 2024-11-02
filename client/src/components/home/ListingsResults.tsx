import { BookingQuery, PropertyListings } from "@/lib/types";

export default function ListingsResults({
  results,
  query,
}: {
  results: PropertyListings[];
  query: BookingQuery;
}) {
  return (
    <>
      {results.length === 0 ? (
        <h2 className="text-center">
          No results found for a {query.bedrooms || "n"} bedroom{" "}
          {query.type?.toLowerCase() || "property"} in{" "}
          {query.location || "unknown"}.
        </h2>
      ) : (
        results.map((result) => <p key={result.id}>{result.name}</p>)
      )}
    </>
  );
}
