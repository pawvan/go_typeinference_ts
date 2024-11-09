import typeInfer from 'typeInfer';

describe('typeInfer', () => {
  test('should return "number" for numeric values', () => {
    expect(typeInfer(42)).toBe('number');
  });

  test('should return "string" for string values', () => {
    expect(typeInfer("hello")).toBe('string');
  });

  test('should return "boolean" for boolean values', () => {
    expect(typeInfer(true)).toBe('boolean');
  });

  test('should return "null" for null values', () => {
    expect(typeInfer(null)).toBe('null');
  });

  test('should return "object" for objects', () => {
    expect(typeInfer({})).toBe('object');
  });

  test('should return "array" for arrays', () => {
    expect(typeInfer([1, 2, 3])).toBe('array');
  });

  test('should return "Date" for Date objects', () => {
    expect(typeInfer(new Date())).toBe('Date');
  });

  test('should return "RegExp" for regular expression', () => {
    expect(typeInfer(/abc/)).toBe('RegExp');
  });

  test('should return "function" for functions', () => {
    expect(typeInfer(function() {})).toBe('function');
  });
});
