import React from 'react';
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
  const {signed, loading} = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
