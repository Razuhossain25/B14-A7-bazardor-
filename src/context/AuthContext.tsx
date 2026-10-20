'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

interface User { name: string; email: string; avatar?: string; }

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (name: string, email: string) => void;
  updateUser: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('bazardor_user');
      if (saved) setUser(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }, []);

  const login = (name: string, email: string) => {
    const newUser = { name, email, avatar: '👤' };
    setUser(newUser);
    localStorage.setItem('bazardor_user', JSON.stringify(newUser));
    toast.success('সফলভাবে সাইন ইন করেছেন!');
  };

  const updateUser = (newName: string) => {
    if (!user) return;
    const updated = { ...user, name: newName };
    setUser(updated);
    localStorage.setItem('bazardor_user', JSON.stringify(updated));
    toast.success('প্রোফাইলের তথ্য আপডেট করা হয়েছে!');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bazardor_user');
    toast.success('সফলভাবে সাইন আউট করা হয়েছে');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
