import createShape from './index';

describe('Creates Shape Object', () => {
  it('should be defined', () => {
    expect(createShape).toBeDefined();
  });

  it('should never return an empty object', () => {
    expect(createShape()).not.toBe({});
  });

  it('should have a border radius property', () => {
    expect(createShape()).toHaveProperty('borderRadius', 4);
  });
});
