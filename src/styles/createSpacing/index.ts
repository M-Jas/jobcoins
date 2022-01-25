import { StyleSheet } from 'react-native';

export interface Spacing {
  hairlineWidth: number;
  unit: number;
}

const createSpacing = () => ({
  hairlineWidth: StyleSheet.hairlineWidth,
  unit: 8,
});

export default createSpacing;
