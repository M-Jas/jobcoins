import mergeStyles from './index';

describe('mergeStyles', () => {
  const styles = {
    root: {
      backgroundColor: 'red',
    },
    label: {
      fontSize: 14,
    },
  };

  const propStyles = {
    root: {
      backgroundColor: 'blue',
    },
  };
  it('should merge keys onto an array value', () => {
    const nextStyles = mergeStyles(styles, propStyles);

    expect(nextStyles.root).toBeInstanceOf(Array);
    expect(nextStyles.root.length).toBe(2);

    expect(nextStyles.label).toBeInstanceOf(Array);
    expect(nextStyles.label.length).toBe(1);
  });

  it('should merge the new styles on the right side/end of the array', () => {
    const nextStyles = mergeStyles(styles, propStyles);

    expect(nextStyles.root[0]).toEqual(styles.root);
    expect(nextStyles.root[1]).toEqual(propStyles.root);
  });

  it('should not merge key that do not exist on the original styles', () => {
    const nextStyles = mergeStyles(styles, {
      newStyleProp: {
        backgroundColor: 'red',
      },
    });

    expect(nextStyles).not.toHaveProperty('newStyleProp');
  });
});
