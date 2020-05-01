import React, {useContext} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Dashboard: React.FC = () => {
  const {signOut, user} = useContext(AuthContext);

  function handleSingOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Sign Out" onPress={handleSingOut} />
    </View>
  );
};

export default Dashboard;
