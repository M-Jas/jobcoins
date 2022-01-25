import createSpacing from './index';

describe('Creates Spacing Object', () => {
  it('should be defined', () => {
    expect(createSpacing).toBeDefined();
  });

  it('should never return an empty object', () => {
    expect(createSpacing()).not.toBe({});
  });

  it('should have a spacing unit property', () => {
    expect(createSpacing()).toHaveProperty('unit', 8);
  });
});
