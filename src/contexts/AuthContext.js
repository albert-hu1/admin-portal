import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiRequest } from '../utils/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [token]);

  const signup = async (email, password) => {
    try {
      const response = await apiRequest('POST', '/signup', { email, password });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const verifyEmail = async (email, otp) => {
    try {
      const response = await apiRequest('POST', '/verify-email', { email, otp });
      if (response.token) {
        setToken(response.token);
        localStorage.setItem('token', response.token);
        setUser({ uid: response.uid, email });
      }
      return response;
    } catch (error) {
      throw error;
    }
  };

  const resendOtp = async (email) => {
    try {
      const response = await apiRequest('POST', '/resend-otp', { email });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await apiRequest('POST', '/login', { email, password });
      if (response.token) {
        setToken(response.token);
        localStorage.setItem('token', response.token);
        setUser({ uid: response.uid, email });
      }
      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Only call logout API if we have a token
      if (token) {
        await apiRequest('POST', '/logout', {}, token);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setToken(null);
      setUser(null);
      localStorage.removeItem('token');
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await apiRequest('POST', '/forgot-password', { email });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const value = {
    user,
    token,
    signup,
    verifyEmail,
    resendOtp,
    login,
    logout,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};