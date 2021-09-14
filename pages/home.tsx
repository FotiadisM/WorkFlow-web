import Navbar from "@/components/navbar/Navbar";
import { Post } from "@/components/homepage/Post";
import { CreatePostArea } from "@/components/homepage/CreatePostArea";
import { AuthRoute } from "@/components/auth/AuthRoute";
import { useEffect, useState } from "react";
import { Feed } from "@/src/types/posts";

const dummyPosts: Feed[] = [
  {
    type: "post",
    perpetrator_id: "1",
    post_id: "998c0f9c-4910-459b-9ca2-cc2f31cd2233",
  },
  {
    type: "post",
    perpetrator_id: "1",
    post_id: "3703dc5f-46fa-4ae5-88fd-060a1f370529",
  },
  // { type: "share", perpetrator_id: "2", post_id: "2" },
  // { type: "comment", perpetrator_id: "3", post_id: "3" },
  // { type: "like", perpetrator_id: "4", post_id: "4" },
];

export default function Home() {
  const [feed, setFeed] = useState<Feed[]>([]);

  useEffect(() => {
    setFeed(dummyPosts);
  }, []);

  return (
    <AuthRoute>
      <Navbar />
      <main className="relative">
        <div className="absolute transform -translate-x-1/2 left-1/2 mt-10">
          <div className="space-y-4 pb-14">
            <CreatePostArea />
            {feed.map((f) => (
              <Post key={f.post_id} feed={f} />
            ))}
          </div>
        </div>
      </main>
    </AuthRoute>
  );
}
