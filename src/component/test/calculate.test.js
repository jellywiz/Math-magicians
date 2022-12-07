import calculate from '../logic/calculate';

describe('calculate.js tests', () => {
  test('Addition', () => {
    const buttonName = '+';
    const object = {
      total: '105',
      next: '-20',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).operation).toBe(buttonName);
    expect(calculate(object, buttonName).total).toBe('85');
    expect(calculate(object, buttonName).next).toBe(null);
  });
  test('Substraction', () => {
    const buttonName = '-';
    const obj = {
      total: '332',
      next: '450',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
    expect(calculate(obj, buttonName).total).toBe('-118');
    expect(calculate(obj, buttonName).next).toBeNull();
  });
  test('Multiplication', () => {
    const buttonName = 'x';
    const obj = {
      total: '3',
      next: '10',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
    expect(calculate(obj, buttonName).total).toBe('30');
    expect(calculate(obj, buttonName).next).toBeNull();
  });
  test('Division', () => {
    const buttonName = '÷';
    const obj = {
      total: '2524',
      next: '2',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
    expect(calculate(obj, buttonName).total).toBe('1262');
    expect(calculate(obj, buttonName).next).toBeNull();
  });
  test('Inversion Operator', () => {
    const buttonName = '+/-';
    const object = {
      total: '7070',
      next: '-1986',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).operation).toBe(buttonName);
    expect(calculate(object, buttonName).next).toBe('1986');
  });
  test('Dot notation', () => {
    const buttonName = '.';
    const object = {
      total: '3980',
      next: '1920',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).operation).toBe(buttonName);
    expect(calculate(object, buttonName).next).toBe('1920.');
  });
  test('Return Result (=)', () => {
    const buttonName = '=';
    const object = {
      total: '201',
      next: '-6',
      operation: 'x',
    };
    expect(calculate(object, buttonName).operation).toBe(null);
    expect(calculate(object, buttonName).total).toBe('-1206');
    expect(calculate(object, buttonName).next).toBe(null);
  });
});
