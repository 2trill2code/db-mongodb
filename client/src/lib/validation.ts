import { BookingQuery } from "@/lib/types";

type ValidationResult = {
  isValid: boolean;
  errors: string[];
};

export function validateFields(query: BookingQuery): ValidationResult {
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
