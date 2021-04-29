import { Post } from "@/components/homepage/Post";
import Navbar from "@/components/Navbar";
import { useState } from "react";

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
