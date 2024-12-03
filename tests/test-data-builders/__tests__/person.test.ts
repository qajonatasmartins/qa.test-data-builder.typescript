import { describe, expect, test } from "@jest/globals";
import { PersonFakeBuilder } from "../person-fake-builder";

describe("person", () => {
  test("person name", () => {
    const person = PersonFakeBuilder.aPerson().build();
    console.log(person);
  });
});
