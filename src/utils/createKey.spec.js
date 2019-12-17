import createKey from './createKey';

describe('createKey', () => {
  it('should create a key from a string', () => {
    const actual = createKey('Some Super Duper string', 123);
    const expected = 'some-super-duper-string_123';

    expect(actual).toBe(expected);
  });
});
