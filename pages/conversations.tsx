import { useState } from "react";
import MessagingBox from "@/components/conversation/MessagingBox";
import MessagingUser from "@/components/conversation/MessagingUser";
import Navbar from "@/components/navbar/Navbar";
import { AuthRoute } from "@/components/auth/AuthRoute";

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
    <AuthRoute>
      <Navbar />
      <main className="flex justify-center py-10">
        <div className="flex" style={{ width: "70vw", maxWidth: "1120px" }}>
          <div
            className="pr-7 border-r space-y-1"
            style={{ flexBasis: "100%", maxWidth: "270px" }}
          >
            {users.map((u, i) => (
              <MessagingUser
                key={u.id}
                user={u}
                current={users[curUser].id === u.id}
                setCurUser={() => setCurUser(i)}
              />
            ))}
          </div>
          <div style={{ flexShrink: 2 }}>
            <MessagingBox user={users[curUser]} />
          </div>
        </div>
      </main>
    </AuthRoute>
  );
}
