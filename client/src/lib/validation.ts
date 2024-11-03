import { BookingQuery, SearchQuery } from "@/lib/types";

type ValidationResult = {
  isValid: boolean;
  errors: string[];
};

export function validateFields(query: SearchQuery): ValidationResult {
  if (!query.location || !query.location.trim()) {
    return {
      isValid: false,
      errors: ["Location is required"],
    };
  }

  return {
    isValid: true,
    errors: [],
  };
}

export function validateBookingFields(query: BookingQuery): ValidationResult {
  const errors: string[] = [];

  if (!query.name || !query.name.trim()) errors.push("Name is required");
  if (!query.email || !query.email.trim()) errors.push("Email is required");
  if (!query.mobile || !query.mobile.trim()) errors.push("Mobile is required");
  if (!query.postalAddress || !query.postalAddress.trim())
    errors.push("Postal Address is required");
  if (!query.residentialAddress || !query.residentialAddress.trim())
    errors.push("Residential Address is required");
  if (!query.checkInDate) errors.push("Check in date is required");
  if (!query.checkOutDate) errors.push("Check out date is required");
  if (query.checkInDate && query.checkOutDate) {
    const checkInDate = new Date(query.checkInDate);
    const checkOutDate = new Date(query.checkOutDate);

    if (checkInDate.getDate() > checkOutDate.getDate()) {
      errors.push("Check out date must be after check in date");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
