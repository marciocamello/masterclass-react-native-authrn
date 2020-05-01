import React, {createContext} from 'react';

interface AuthContextData {
  signed: boolean;
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({
  signed: true,
});

export const AuthProvider: React.FC = ({children}) => (
  <AuthContext.Provider value={{signed: false}}>
    {children}
  </AuthContext.Provider>
);

export default AuthContext;
