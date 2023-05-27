import React, { createContext, useContext, useState } from "react";
export const useAuth = createContext();

export const ProviderContext = ({ children }) => {
  const [position, setPosition] = useState();
  return (
    <useAuth.Provider value={{ position, setPosition }}>
      {children}
    </useAuth.Provider>
  );
};

export const UserAuth = () => useContext(useAuth);
