import { useState } from "react";
import Box from "@/components/conversation/Box";
import User from "@/components/conversation/User";
import Navbar from "@/components/navbar/Navbar";

const users: { id: string; name: string; image: string }[] = [
  {
    id: "1",
    name: "Jim Manouris",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "2",
    name: "John Xatzopoulos",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "3",
    name: "Michail Tatas",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Conversations() {
  const [curUser, setCurUser] = useState<number>(0);

  return (
    <>
      <Navbar />
      <main className="flex justify-center mt-10">
        <div className="pr-7 border-r space-y-1">
          {users.map((u, i) => (
            <User
              key={u.id}
              user={u}
              current={users[curUser].id === u.id}
              setCurUser={() => setCurUser(i)}
            />
          ))}
        </div>
        <Box user={users[curUser]} />
      </main>
    </>
  );
}
