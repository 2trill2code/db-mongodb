export type SearchQuery = {
  location: string;
  type: string | undefined;
  bedrooms: string | undefined;
};

export type BookingQuery = {
  name: string;
  email: string;
  mobile: string;
  postalAddress: string;
  residentialAddress: string;
  checkInDate: Date | undefined;
  checkOutDate: Date | undefined;
};

export type PropertyListings = {
  _id: string;
  name: string | undefined;
  summary: string | undefined;
  dailyPrice: number | undefined;
  reviewScore: number | undefined;
} & BookingQuery;
