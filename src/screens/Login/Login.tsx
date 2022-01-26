// Libs
import React from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from '@components';
import makeStyles from '@styles/makeStyles';
import useAuth from '@contexts/AuthContext';
/**
 * TODO: (MJ)
 *
 * - Add Icon/Image
 * - Add tests
 * - Add Button Component
 *
 */

interface LoginProps {}

const Login = ({ ...other }: LoginProps) => {
  const { authActions } = useAuth();
  const styles = useStyles();

  const handleSignInPress = () => {
    authActions.signIn('MJ_ADDRESS');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Jobcoins</Text>
      <View style={styles.iconImage} />
      <Input />
      <Button title="Login" onPress={handleSignInPress} />
    </View>
  );
};

const useStyles = makeStyles(({ palette, spacing, typography }) => {
  return {
    root: {
      flex: 1,
      paddingTop: 100,
      padding: spacing.unit * 2,
    },
    title: {
      ...typography.headingTitle,
    },
    iconImage: {
      borderColor: palette.primary,
      borderWidth: 1,
      height: 100,
      width: 100,
      alignSelf: 'center',
      marginBottom: spacing.unit * 4,
    },
  };
});

export default Login;
