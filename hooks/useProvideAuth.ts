import { serverURI } from "@/src/api/url";
import { User } from "@/src/types/user";
import { useRouter } from "next/router";
import { useState } from "react";

export function useProvideAuth() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (
    email: string,
    password: string
  ): Promise<string | null> => {
    setUser({
      id: "888",
      f_name: "Kwstas",
      l_name: "Kaklavas",
      email: "kwstas@mail.com",
      company: "Tremple",
      position: "Sengion Engineer",
      profile_pic: "48cc65e5-40d2-4fb6-ac21-9f222882d383",
      role: "normal",
    });

    return null;
  };

  const signUp = async (
    f_name: string,
    l_name: string,
    email: string,
    company: string,
    position: string,
    password: string,
    profile: File
  ): Promise<string | null> => {
    const formData = new FormData();
    formData.append("f_name", f_name);
    formData.append("l_name", l_name);
    formData.append("email", email);
    formData.append("company", company);
    formData.append("position", position);
    formData.append("password", password);
    formData.append("profile", profile, profile.name);

    const res = await fetch(serverURI + "/auth/signUp", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const text = await res.text();
      if (text === "key already exist") return "Email is already in use";
      return res.statusText + " " + text;
    }

    const data = await res.json();
    console.log(data);
    // TODO: set user
    setUser({
      id: "888",
      f_name: "Kwstas",
      l_name: "Kaklavas",
      email: "kwstas@mail.com",
      company: "Tremple",
      position: "Sengion Engineer",
      profile_pic: "",
      role: "normal",
    });

    return null;
  };

  const signOut = () => {
    setUser(null);
    router.push("/");
  };

  return {
    user,
    setUser,
    signIn,
    signUp,
    signOut,
  };
}
