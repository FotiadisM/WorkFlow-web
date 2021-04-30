import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import { Post } from "@/components/homepage/Post";
import { CreatePost } from "@/components/homepage/CreatePost";

export default function Home() {
  const [navHeight, setNavHeight] = useState<number>(0);

  const getHeight = (h: number) => {
    setNavHeight(h);
  };

  return (
    <>
      <Navbar getHeight={getHeight} />
      <main
        className="relative"
        style={{
          height: `calc(100vh - ${navHeight}px`,
        }}
      >
        <div
          className="absolute transform -translate-x-1/2 left-1/2"
          style={{ top: "10%" }}
        >
          <div className="space-y-4">
            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </main>
    </>
  );
}
