import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

interface UserContextType {
  user: { name: string; email: string } | null;
  token: string | null;
  setUser: (user: { name: string; email: string } | null) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("access_token"));
  const navigate = useNavigate();

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

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, token, setUser, setToken, logout }}>
      {children}
    </UserContext.Provider>
  );
};
