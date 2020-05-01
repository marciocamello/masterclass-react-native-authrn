import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthContext from './contexts/auth';

import Routes from './routes';

const App: React.FC = () => {
  const {signed, setSigned} = useState(false);
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{signed: true}}>
        <Routes />
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
