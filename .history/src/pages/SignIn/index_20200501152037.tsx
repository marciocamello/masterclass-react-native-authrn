import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import authService from '../../services/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const SingIn: React.FC = () => {
  function handleSingIn() {}

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={() => {}}></Button>
    </View>
  );
};

export default SingIn;
