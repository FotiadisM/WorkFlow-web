import { Post } from "@/components/homepage/Post";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const dummyPosts: {
  ftype: "post" | "share" | "like" | "comment";
  post_id: string;
  perpetaror_id: string;
}[] = [
  { ftype: "post", perpetaror_id: "1", post_id: "1" },
  { ftype: "share", perpetaror_id: "2", post_id: "2" },
  { ftype: "comment", perpetaror_id: "3", post_id: "3" },
  { ftype: "like", perpetaror_id: "4", post_id: "4" },
];

export default function UserProfile() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center flex-col py-10 px-44">
        <div className="w-full border-2 rounded-full p-4 flex pr-28">
          <img
            className="h-40 w-40 rounded-full mr-14"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile-picture"
          />
          <div className="pt-4 flex-1">
            <div className="flex items-end">
              <h1 className="text-4xl font-medium italic">Mike Fotiadis</h1>
              <h3 className="pl-8 pb-1 text-xl text-gray-800 italic">
                Software Engineer <span className="text-gray-600">@</span>{" "}
                Katrakala
              </h3>
            </div>
            <hr />
            <div className="pt-2 flex items-center text-gray-700">
              <p className="mr-2">973 friends</p>
              <p>|</p>
              <p className="ml-2">235 in common</p>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <div className="flex items-center">
                <button className="btn px-3 mr-3 py-2 text-purple-800 border border-purple-800 hover:text-white hover:bg-purple-800 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                  </svg>
                  Message
                </button>
                <button className="btn px-3 py-2 text-purple-800 border border-purple-800 hover:text-white hover:bg-purple-800 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  Add friend
                </button>
              </div>
              <button className="btn px-3 py-2 text-purple-800 border border-purple-800 hover:text-white hover:bg-purple-800 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z" />
                </svg>
                Resume
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          {dummyPosts.map((p) => (
            <Post key={p.post_id} {...p} />
          ))}
        </div>
      </main>
    </>
  );
}
