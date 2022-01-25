import createSpacing from '@styles/createSpacing';
import createTypography from '@styles/createTypography';
import createShape from '@styles/createShape';
import { render } from '@test/test-utils';
import React from 'react';
import Button from './Button';

const typography = createTypography(true);
const spacing = createSpacing();
const shape = createShape();

describe('Button', () => {
  const MakeComponent = ({ ...other }) => {
    return <Button title="Pew Pew" {...other} />;
  };

  it('renders without error', () => {
    render(<MakeComponent />);
  });

  it('merges styling on to the default title styles', () => {
    const titleStyles = { color: 'red' };
    const { getByText } = render(
      <MakeComponent styles={{ title: titleStyles }} />,
    );
    const component = getByText('Pew Pew');

    expect(component).toHaveStyle({ ...typography.labelBold, color: 'red' });
  });

  it('merges styling on to the default button styles', () => {
    const buttonStyle = { backgroundColor: 'yellow' };
    const { getByTestId } = render(
      <MakeComponent styles={{ button: buttonStyle }} />,
    );

    const component = getByTestId('JwButton');

    expect(component.children[0]).toHaveStyle({
      backgroundColor: 'yellow',
      paddingHorizontal: spacing.unit * 2,
      paddingVertical: spacing.unit * 2,
      borderRadius: shape.borderRadius,
    });
  });
});
