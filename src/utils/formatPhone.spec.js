import formatPhone from './formatPhone';

describe('formatPhone', () => {
  it('should correctly format a number string to a phone number', () => {
    const number = '1234567890';
    const expected = '(123) 456-7890';
    expect(formatPhone(number)).toBe(expected);
  });
});
