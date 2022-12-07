import operate from '../logic/operate';

describe('Testing operation functions', () => {
  test('Addition', () => {
    expect(operate(114, 10, '+')).toBe('124');
  });
});
