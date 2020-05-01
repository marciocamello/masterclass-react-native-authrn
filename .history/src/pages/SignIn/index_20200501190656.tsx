import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const SingIn: React.FC = () => {
  const {signed} = useContext(AuthContext);
  console.log(signed);

  async function handleSingIn() {
    console.log('Logar');
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSingIn} />
    </View>
  );
};

export default SingIn;
