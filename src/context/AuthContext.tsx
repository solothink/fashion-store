import React, { createContext, useContext, useState } from 'react';
import { User, AuthContextType } from '../types';
import { users } from '../data/mockData';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    const foundUser = users.find(
      u => u.username === username && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}