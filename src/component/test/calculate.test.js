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
});
