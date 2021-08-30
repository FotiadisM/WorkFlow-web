import { User } from "@/src/types/user";
import { useState } from "react";

export function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (email: string, password: string) => {
    setUser({
      id: "888",
      f_name: "Kwstas",
      l_name: "Kaklavas",
      email: "kwstas@mail.com",
      company: "Tremple",
      position: "Sengion Engineer",
      role: "normal",
    });
  };

  const signUp = (email: string, password: string) => {
    setUser({
      id: "888",
      f_name: "Kwstas",
      l_name: "Kaklavas",
      email: "kwstas@mail.com",
      company: "Tremple",
      position: "Sengion Engineer",
      role: "normal",
    });
  };

  const signOut = () => {
    setUser(null);
  };

  return {
    user,
    signIn,
    signUp,
    signOut,
  };
}
