import { useProvideAuth } from "@/hooks/useProvideAuth";
import { User } from "@/src/types/user";
import { useRouter } from "next/router";
import { createContext, Dispatch, SetStateAction, useContext, useEffect } from "react";

interface ContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  signOut: () => void;
}

const authContext = createContext<ContextType | null>(null);

export const useAuth = () => {
  return useContext(authContext);
};

export const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const AuthRoute: React.FC = ({ children }) => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth !== null) {
      if (auth.user === null) {
        router.push("/");
      }
    }
  }, [auth]);

  return <>{children}</>;
};
