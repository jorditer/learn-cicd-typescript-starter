import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";

const person = {
  isActive: true,
  age: 32,
};

// describe("returns null", () => {
//   test("If not request it returns null", () => {
//     expect(getAPIKey(" ")).toBeDefined();
//   });

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});
