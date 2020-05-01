import {createContext} from 'react';

const AuthContext = createContext({
  signed: true,
});

export const AuthProvider: React.FC = () => {
  <AuthContext.Provider value={{signed: false}}>
    <Routes />
  </AuthContext.Provider>;
};

export default AuthContext;
