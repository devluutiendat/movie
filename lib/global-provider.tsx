import React, { createContext, ReactNode, useContext } from "react";

import { User } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./api";

interface GlobalContextType {
  isLogged: boolean;
  user: User | null;
  isLoading: boolean;
  refetch: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const {
    data: user = null,
    isLoading,
    refetch,
  } = useQuery<User | null>({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });

  const isLogged = !!user;
  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        user,
        isLoading,
        refetch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext must be used within a GlobalProvider");

  return context;
};

export default GlobalProvider;
