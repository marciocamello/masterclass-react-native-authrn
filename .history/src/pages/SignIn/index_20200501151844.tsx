import React from 'react';
import {View, Button} from 'react-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
};

const SingIn: React.FC = () => (
  <View style={styles.container}>
    <Button title="Sign In" onPress={() => {}}></Button>
  </View>
);

export default SingIn;
