import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verifica si hay un usuario guardado al iniciar la aplicación
  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  // Función para iniciar sesión
  const login = async (userData) => {
    setUser(userData);
    await AsyncStorage.setItem("user", JSON.stringify(userData));
  };

  // Función para cerrar sesión
  const logout = async () => {
    await AsyncStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
