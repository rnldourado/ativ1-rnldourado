import { soma, subtrai, multiplica, divide } from '../calculadora';

describe('Calculadora', () => {
  test('soma dois números', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('subtrai dois números', () => {
    expect(subtrai(5, 3)).toBe(2);
  });

  test('multiplica dois números', () => {
    expect(multiplica(4, 2)).toBe(8);
  });

  test('divide dois números', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('lança erro ao dividir por zero', () => {
    expect(() => divide(10, 0)).toThrow("Divisão por zero");
  });
});
