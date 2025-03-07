import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

interface UserContextType {
  user: { name: string; email: string } | null;
  token: string | null;
  setUser: (user: { name: string; email: string } | null) => void;
  setToken: (token: string | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("access_token"));

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      try {
        const response = await api.get("/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data._doc);
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
        setUser(null);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
