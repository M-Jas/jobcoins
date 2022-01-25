// Libs
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProps } from '@types';
import makeStyles from '@styles/makeStyles';
import { Icon } from 'react-native-elements';
import useTheme from '@styles/useTheme';

interface HomeProps extends NavigationScreenProps {}

const Home = ({}: HomeProps) => {
  const styles = useStyles();
  const { palette } = useTheme();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}> Current Balance</Text>
        <Icon
          name="paper-plane-outline"
          type="ionicon"
          color={palette.secondary}
        />
      </View>
    </View>
  );
};

const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  root: {
    padding: spacing.unit * 2,
    backgroundColor: palette.black,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...typography?.headingTitle,
    color: palette?.primary,
  },
}));

export default Home;
