import { describe, expect, it } from "vitest";
import { isISBN } from "./is-isbn";

interface TestPattern {
  title: string;
  inputISBN: string;
  expected: boolean;
}
const TEST_PATTERNS: TestPattern[] = [
  {
    title: "Valid 10-digit ISBN",
    inputISBN: "1234567890",
    expected: true,
  },
  {
    title: "Valid 13-digit ISBN",
    inputISBN: "1234567890123",
    expected: true,
  },
  {
    title: "Invalid ISBN with less than 10 digits",
    inputISBN: "123456789",
    expected: false,
  },
  {
    title: "Invalid ISBN with more than 13 digits",
    inputISBN: "12345678901234",
    expected: false,
  },
  {
    title: "Invalid ISBN containing non-numeric characters",
    inputISBN: "12345abcde",
    expected: false,
  },
];

describe("isISBN", () => {
  TEST_PATTERNS.forEach(({ title, inputISBN, expected }) => {
    it(title, () => {
      expect(isISBN(inputISBN)).toBe(expected);
    });
  });
});
