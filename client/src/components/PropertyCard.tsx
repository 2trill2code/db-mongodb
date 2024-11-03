import Link from "next/link";

import { PropertyListings } from "@/lib/types";

export default function PropertyCard({
  property,
}: {
  property: PropertyListings;
}) {
  return (
    <div className="mb-5 p-3 rounded-sm bg-background-200">
      <div className="flex justify-between">
        <h3>
          <Link
            href={`booking/${property._id}`}
            className="text-xl text-balance font-bold hover:underline"
          >
            {property.name}
          </Link>
        </h3>

        <p className="font-semibold text-balance">${property.dailyPrice}</p>
      </div>

      <p className="text-lg mb-2">{property.location}</p>

      {property.summary && <p className="mb-2">{property.summary}</p>}

      {property.reviewScore && <p>Review Score: {property.reviewScore}</p>}

      {property.bedrooms && <p>Bedrooms: {property.bedrooms}</p>}

      {property.type && <p>Type: {property.type}</p>}
    </div>
  );
}
