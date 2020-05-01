import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthContext from './contexts/auth';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <AuthContext.Provider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
