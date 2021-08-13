import Navbar from "@/components/navbar/Navbar";
import { Post } from "@/components/homepage/Post";
import { CreatePost } from "@/components/homepage/CreatePost";

const dummyPosts: {
  ftype: "post" | "share" | "like" | "comment";
  post_id: string;
  perpetaro_id: string;
}[] = [
  { ftype: "post", perpetaro_id: "1", post_id: "1" },
  { ftype: "share", perpetaro_id: "2", post_id: "2" },
  { ftype: "comment", perpetaro_id: "3", post_id: "3" },
  { ftype: "like", perpetaro_id: "4", post_id: "4" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <div className="absolute transform -translate-x-1/2 left-1/2 mt-10">
          <div className="space-y-4 pb-14">
            <CreatePost />
            {dummyPosts.map((p) => (
              <Post key={p.post_id} {...p} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
