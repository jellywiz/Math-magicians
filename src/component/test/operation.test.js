import operate from '../logic/operate';

describe('Testing operation functions', () => {
  test('Addition', () => {
    expect(operate(114, 10, '+')).toBe('124');
  });

  test('Multiplication', () => {
    expect(operate(44, 3, 'x')).toBe('132');
  });

  test('Subtraction', () => {
    expect(operate(112, 203, '-')).toBe('-91');
  });

  test('Division', () => {
    expect(operate(885, 10, '÷')).toBe('88.5');
  });

  test('Modulus', () => {
    expect(operate(223, 2, '%')).toBe('1');
  });
});
