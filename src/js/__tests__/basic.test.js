import sum from '../basic';

test('basic test 0', () => {
  const result = sum([10]);

  expect(result).toBe(10);
});

test('basic test no arguments', () => {
  const result = sum([]);

  expect(result).toBe(0);
});

test('basic test no arguments', () => {
  const result = sum([1, 2, 5]);

  expect(result).toBe(8);
});
