import { useState } from "react";
import Navbar from "@/components/Navbar";

const networkUsers: networkUser[] = [
  {
    id: "1",
    fname: "Mike",
    lname: "Fotiadis",
    company: "Google",
    occupation: "DevOps Enginner",
    profilePic: "",
  },
  {
    id: "2",
    fname: "Mike",
    lname: "Fotiadis",
    company: "Google",
    occupation: "DevOps Enginner",
    profilePic: "",
  },
  {
    id: "3",
    fname: "Mike",
    lname: "Fotiadis",
    company: "Google",
    occupation: "DevOps Enginner",
    profilePic: "",
  },
];

interface networkUser {
  id: string;
  fname: string;
  lname: string;
  profilePic: string;
  company: string;
  occupation: string;
}

interface NetworkUserProps {
  user: networkUser;
}

const NetworkUser: React.FC<NetworkUserProps> = ({ user }) => {
  return (
    <div className="flex px-3 py-2 border rounded-lg">
      <img
        className="h-12 w-12 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="profile-picture"
      />
      <div className="flex items-center space-x-4 ml-5">
        <div className="text-xl">
          {user.fname} {user.lname}
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-building"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
            />
            <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
          </svg>
          <div>{user.company}</div>
        </div>
        <div>{user.lname}</div>
      </div>
    </div>
  );
};

export default function Network() {
  const [navHeight, setNavHeight] = useState<number>(0);

  const getHeight = (h: number) => {
    setNavHeight(h);
  };

  return (
    <>
      <Navbar getHeight={getHeight} />
      <main
        className="flex flex-col items-center justify-center"
        style={{ height: `calc(100vh - ${navHeight}px)` }}
      >
        <div>
          <input
            type="text"
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            placeholder="Search Workflow"
          />
          <div className="">
            {networkUsers.map((u) => (
              <NetworkUser key={u.id} user={u} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
