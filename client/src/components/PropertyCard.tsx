import Link from "next/link";

import { PropertyListings } from "@/lib/types";

export default function PropertyCard({
  property,
}: {
  property: PropertyListings;
}) {
  return (
    <div className="mb-5">
      <div>
        <h3>
          <Link href={`bookings/${property._id}`}>{property.name}</Link>
        </h3>
        <p>{property.dailyPrice}</p>
      </div>

      {property.summary && <p>{property.summary}</p>}

      {property.reviewScore && <p>Review Score: {property.reviewScore}</p>}

      {property.bedrooms && <p>Bedrooms: {property.bedrooms}</p>}

      {property.type && <p>Type: {property.type}</p>}

      {property.location && <p>Location: {property.location}</p>}
    </div>
  );
}
