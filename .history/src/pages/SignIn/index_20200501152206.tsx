import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {signIn} from '../../services/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const SingIn: React.FC = () => {
  async function handleSingIn() {
    const response = await signIn();
    console.log(response);
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={() => {}}></Button>
    </View>
  );
};

export default SingIn;
