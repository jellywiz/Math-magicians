import operate from '../logic/operate';

describe('Testing operation functions', () => {
  test('Addition', () => {
    expect(operate(114, 10, '+')).toBe('124');
  });

  test('Multiplication', () => {
    expect(operate(44, 3, 'x')).toBe('132');
  });
});
