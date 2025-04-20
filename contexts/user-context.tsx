"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getSession } from "@/lib/actions/session";
import { redirect } from "next/navigation";

interface User {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}

interface UserContextType {
  user: User | null;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (!session) {
        redirect("/auth/signin");
        return;
      }
      setUser({
        name: session.name || "Visitante",
        email: session.email || "",
        image: session.image || "",
      });
      setIsLoading(false);
    };
    fetchSession();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
