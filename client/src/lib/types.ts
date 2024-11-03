export type PropertyListings = {
  _id: string;
  name: string | undefined;
  summary: string | undefined;
  dailyPrice: number | undefined;
  reviewScore: number | undefined;
} & BookingQuery;

export type BookingQuery = {
  location: string;
  type: string | undefined;
  bedrooms: string | undefined;
};
