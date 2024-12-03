import { faker } from "@faker-js/faker";

export class PersonFakeBuilder {
  private name: string = faker.person.firstName();

  static aPerson() {
    return new PersonFakeBuilder();
  }

  withName(name: string = this.name) {
    this.name = name;
    return this;
  }

  build() {
    return { name: this.name };
  }
}
