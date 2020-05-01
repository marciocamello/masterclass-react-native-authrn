import React, {createContext} from 'react';
import * as auth from '../services/auth';

interface AuthContextData {
  signed: boolean;
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  async function signIn() {
    const response = await auth.signIn();
    console.log('Logar');
  }
  return (
    <AuthContext.Provider value={{signed: false, token: '', user: {}}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
