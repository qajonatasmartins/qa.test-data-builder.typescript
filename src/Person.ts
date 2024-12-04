export class Person {
  /**
   * Método para validar se é menor de idade ou não.
   */
  public isUnderage(age: number): boolean {
    return age < 18;
  }
}
