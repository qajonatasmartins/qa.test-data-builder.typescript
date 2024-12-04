import { describe, expect, test } from "@jest/globals";
import { UserBuilder, UserData } from "../builder/UserBuilder";
import { Person } from "../Person";

describe("Person Class", () => {
  let isUnderage: UserData;
  let isNotUnderage: UserData;
  const person = new Person();

  beforeEach(() => {
    isUnderage = new UserBuilder().withAge(17).build();
    isNotUnderage = new UserBuilder().withAge(18).build();
  });

  test("must validate whether a person aged 17 is a minor", () => {
    expect(person.isUnderage(isUnderage.age)).toBe(true);
  });

  test("must validate whether a person aged 18 is of legal age", () => {
    expect(person.isUnderage(isNotUnderage.age)).toBe(false);
  });

  test("must validate whether a person aged 19 is of legal age", () => {
    expect(person.isUnderage(isNotUnderage.age)).toBe(false);
  });
});
