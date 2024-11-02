import Link from "next/link";

import { PropertyListings } from "@/lib/types";

export default function PropertyCard(property: PropertyListings) {
  return (
    <div>
      <div>
        <h3>
          <Link href={`bookings/${property.id}`}>Name</Link>
        </h3>
        <p>{property.dailyPrice}</p>
      </div>

      {property.summary && <p>{property.summary}</p>}

      {property.reviewScore && property.reviewScore >= 1 ? (
        // stars
        <p>{property.reviewScore}</p>
      ) : (
        <p>No available reviews</p>
      )}
    </div>
  );
}
