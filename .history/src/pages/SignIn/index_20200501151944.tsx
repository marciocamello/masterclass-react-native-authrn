import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const SingIn: React.FC = () => (
  <View style={styles.container}>
    <Button title="Sign In" onPress={() => {}}></Button>
  </View>
);

export default SingIn;
