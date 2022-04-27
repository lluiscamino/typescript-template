import greet from '../src';

describe('index', () => {
  it('should throw error on empty name', () => {
    expect(() => greet('')).toThrow(new Error('Invalid name!'));
  });

  it('should return correct greeting', () => {
    expect(greet('Lluís')).toBe('Hello, Lluís!');
  });
});
