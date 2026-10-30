const { somar, subtrair, multiplicar, dividir, potencia } = require("../js/matematica");

describe("operações matemáticas", () => {
  test("soma dois números", () => {
    expect(somar(2, 3)).toBe(5);
  });

  test("subtrai dois números", () => {
    expect(subtrair(5, 3)).toBe(2);
  });

  test("multiplica dois números", () => {
    expect(multiplicar(4, 3)).toBe(12);
  });

  test("divide dois números", () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test("não permite divisão por zero", () => {
    expect(() => dividir(10, 0)).toThrow(RangeError);
  });

   test("calcula a potencia de um numero com o outro", () => {
    expect(potencia(2,3)).toBe(8);
  });
});
