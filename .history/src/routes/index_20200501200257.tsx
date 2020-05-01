import React, {useContext} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {useAuth} from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Routes: React.FC = () => {
  const {signed, loading} = useContext(useAuth);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="666" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
