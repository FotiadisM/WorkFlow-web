import { serverURI } from "@/src/api/url";
import { fetchPerpetrator } from "@/src/api/user";
import { feedType } from "@/src/types/posts";
import { User } from "@/src/types/user";
import { useEffect, useState } from "react";

interface PostTypeProps {
  type: feedType;
  perpetaror_id: string;
}

const PostType: React.FC<PostTypeProps> = ({ type, perpetaror_id }) => {
  const [postPerpetrator, setPostPerpetrator] = useState<User | null>(null);

  useEffect(() => {
    if (type !== "post") {
      fetchPerpetrator(perpetaror_id)
        .then((u) => {
          setPostPerpetrator(u);
        })
        .catch((err) => console.log(err));
    }
  }, [perpetaror_id]);

  if (type === "like")
    return (
      <div className="px-3">
        <span className="text-purple-800 hover:underline cursor-pointer">
          {postPerpetrator?.f_name} {postPerpetrator?.l_name}
        </span>{" "}
        <span className="font-semibold text-purple-700">liked</span> a post.
        <hr className="my-3" />
      </div>
    );

  if (type === "share")
    return (
      <div className="px-3">
        <span className="text-purple-800 hover:underline cursor-pointer">
          {postPerpetrator?.f_name} {postPerpetrator?.l_name}
        </span>{" "}
        <span className="font-semibold text-purple-700">shared</span> a post.
        <hr className="my-3" />
      </div>
    );

  if (type === "comment")
    return (
      <div className="px-3">
        <span className="text-purple-800 hover:underline cursor-pointer">
          {postPerpetrator?.f_name} {postPerpetrator?.l_name}
        </span>{" "}
        <span className="font-semibold text-purple-700">comment</span> on a
        post.
        <hr className="my-3" />
      </div>
    );

  return null;
};

interface PostHeadProps {
  user_id: string;
  type: feedType;
  perpetaror_id: string;
  created: string;
}

export const PostHead: React.FC<PostHeadProps> = ({
  user_id,
  type,
  perpetaror_id,
  created,
}) => {
  const [postUser, setPostUser] = useState<User | null>(null);

  useEffect(() => {
    fetchPerpetrator(user_id)
      .then((u) => {
        setPostUser(u);
      })
      .catch((err) => console.log(err));
  }, [user_id]);

  return (
    <div className="pt-4 px-3">
      <PostType {...{ type, perpetaror_id }} />
      <div className="flex items-center justify-between mx-3">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full"
            src={serverURI + "/static/" + postUser?.profile_pic}
            alt="profile-picture"
          />
          <button className="ml-3 font-semibold text-purple-700 cursor-pointer hover:underline focus:outline-none">
            {postUser?.f_name} {postUser?.l_name}
          </button>
        </div>
        <div className="text-gray-600">{created}</div>
      </div>
    </div>
  );
};
