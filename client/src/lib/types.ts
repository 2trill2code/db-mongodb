export type PropertyListings = {
  id: string;
  name: string | undefined;
  summary: string | undefined;
  dailyPrice: number | undefined;
  reviewScore: number | undefined;
};

export type BookingQuery = {
  location: string;
  type: string | undefined;
  bedrooms: string | undefined;
};
