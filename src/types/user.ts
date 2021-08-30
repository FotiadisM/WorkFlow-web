export interface User {
  id: string;
  f_name: string;
  l_name: string;
  email: string;
  company: string;
  position: string;
  role: "admin" | "normal";
}
