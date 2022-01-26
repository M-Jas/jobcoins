// Libs
import React from 'react';
import { View, Text } from 'react-native';
import makeStyles from '@styles/makeStyles';
import { Icon } from 'react-native-elements';
import useTheme from '@contexts/ThemeContext';
import { Button } from '@components';
import useAuth from '@contexts/AuthContext';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const { actions } = useAuth();
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
      <Button title="Logout" onPress={actions.signOut} />
    </View>
  );
};

const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  root: {
    padding: spacing.unit * 2,
    backgroundColor: palette.black,
    flex: 1,
    paddingTop: 200,
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
