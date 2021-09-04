import { Comment, Post } from "@/src//types/posts";
import { serverURI } from "./url";

export const fetchPost = async (post_id: string): Promise<Post | null> => {
  const res = await fetch(serverURI + "/posts/" + post_id);

  if (!res.ok) {
    const txt = await res.text();
    console.log("ERROR fetching post", txt);
    return null;
  }

  const p = await res.json();
  return p.post;
};

export const postComment = async (
  post_id: string,
  user_id: string,
  text: string
): Promise<Comment | null> => {
  const res = await fetch(serverURI + "posts/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user_id,
      post_id: post_id,
      text: text,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.log("ERROR creating comment", text);
    return null;
  }

  const data = await res.json();

  return {
    id: data.id,
    user_id: user_id,
    text: data.text,
    created: data.created,
    likes: data.likes,
  };
};
