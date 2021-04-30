import { classNames } from "@/src/util";
import { Dispatch, SetStateAction, useState } from "react";
import { PostComments } from "./PostComments";

const PostType: React.FC<PostHeadProps> = ({ ftype, perpetaro_id }) => {
  if (ftype === "like")
    return (
      <div className="px-3">
        <span className="text-purple-800 hover:underline cursor-pointer">
          Dimitris Manours
        </span>{" "}
        <span className="font-semibold text-purple-700">liked</span> a post.
        <hr className="my-3" />
      </div>
    );

  if (ftype === "share")
    return (
      <div className="px-3">
        <span className="text-purple-800 hover:underline cursor-pointer">
          Dimitris Manours
        </span>{" "}
        <span className="font-semibold text-purple-700">shared</span> a post.
        <hr className="my-3" />
      </div>
    );

  if (ftype === "comment")
    return (
      <div className="px-3">
        <span className="text-purple-800 hover:underline cursor-pointer">
          Dimitris Manours
        </span>{" "}
        <span className="font-semibold text-purple-700">comment</span> on a
        post.
        <hr className="my-3" />
      </div>
    );

  return null;
};

interface PostHeadProps {
  ftype: ftype;
  perpetaro_id: string;
}

const PostHead: React.FC<PostHeadProps> = ({ ftype, perpetaro_id }) => {
  return (
    <div className="pt-4 px-3">
      <PostType {...{ ftype, perpetaro_id }} />
      <div className="flex items-center justify-between mx-3">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile-picture"
          />
          <div className="ml-3 font-semibold text-purple-700">
            Mike Fotiadis
          </div>
        </div>
        <div className="text-gray-600">12:31</div>
      </div>
    </div>
  );
};

interface PostBodyProps {}

const PostBody: React.FC<PostBodyProps> = () => {
  return (
    <div className="px-3 pb-1">
      <div className="mx-2 mt-2 text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.e
      </div>
    </div>
  );
};

interface PostStatsProps {
  liked: boolean;
  setOpenComments: Dispatch<SetStateAction<boolean>>;
}

const PostStats: React.FC<PostStatsProps> = ({ liked, setOpenComments }) => {
  return (
    <div className="flex items-center justify-between text-gray-600">
      <div className="flex items-center">
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <path
            d="m511.917969 256c0-141.386719-114.597657-256-255.957031-256-141.363282 0-255.960938 114.613281-255.960938 256s114.597656 256 255.960938 256c141.359374 0 255.957031-114.613281 255.957031-256zm0 0"
            fill="#407fff"
          />
          <path
            d="m393.070312 39.800781c46.359376 46.332031 75.035157 110.359375 75.035157 181.082031 0 141.386719-114.597657 256-255.960938 256-50.445312 0-97.472656-14.601562-137.109375-39.800781 46.3125 46.289063 110.277344 74.917969 180.925782 74.917969 141.359374 0 255.957031-114.613281 255.957031-256 0-90.933594-47.40625-170.785156-118.847657-216.199219zm0 0"
            fill="#406aef"
          />
          <path
            d="m373.394531 247.140625c0-13.941406-11.296875-25.238281-25.234375-25.238281h-35.769531c10.332031-25.851563 11.085937-47.046875 11.019531-53.835938-.007812-.746094.160156-3.390625.160156-3.976562v-1.175782c-.75-24.550781-8.265624-32.066406-17.917968-35.644531-9.898438 0-17.921875 8.019531-17.921875 17.917969v1.792969c-.097657 6.136719-8.71875 18.796875-8.71875 18.796875l-65.757813 66.515625-1.109375 1.363281-20 53.484375 20 82.929687c0 2.515626 2.039063 4.550782 4.550781 4.550782h123.800782c8.421875 0 15.582031-6.140625 16.855468-14.46875 4.867188-31.835938 16.042969-105.710938 16.042969-113.011719zm0 0"
            fill="#e3faff"
          />
          <path
            d="m197.863281 384.734375h-45.058593c-7.886719 0-14.28125-6.394531-14.28125-14.285156v-135.28125c0-7.890625 6.394531-14.28125 14.28125-14.28125h45.058593c7.886719 0 14.28125 6.390625 14.28125 14.28125v135.28125c0 7.890625-6.394531 14.285156-14.28125 14.285156zm0 0"
            fill="#48d8ff"
          />
          <path
            d="m197.863281 357.824219h-45.058593c-7.886719 0-14.28125-6.394531-14.28125-14.285157v26.910157c0 7.890625 6.394531 14.285156 14.28125 14.285156h45.058593c7.886719 0 14.28125-6.394531 14.28125-14.285156v-26.910157c0 7.890626-6.394531 14.285157-14.28125 14.285157zm0 0"
            fill="#43c5ff"
          />
          <path
            d="m348.160156 221.902344h-4.628906c-.234375 2.21875-.589844 5.125-1.035156 8.570312-8.476563 65.542969-64.273438 114.621094-130.351563 114.621094v24.972656c0 2.515625 2.039063 4.554688 4.550781 4.554688h123.800782c8.421875 0 15.582031-6.144532 16.855468-14.46875 4.867188-31.835938 16.042969-105.710938 16.042969-113.015625 0-13.9375-11.296875-25.234375-25.234375-25.234375zm0 0"
            fill="#ccf4ff"
          />
        </svg>
        <div className={classNames(liked ? "text-purple-800" : "", "ml-2")}>
          {liked ? "You and " : ""}2.3K
        </div>
      </div>
      <div
        className="cursor-pointer hover:text-purple-800"
        onClick={() => setOpenComments((o) => !o)}
      >
        14 Comments
      </div>
    </div>
  );
};

interface PostActionsProps {
  liked: boolean;
  setLiked: Dispatch<SetStateAction<boolean>>;
  setOpenComments: Dispatch<SetStateAction<boolean>>;
}

const PostActions: React.FC<PostActionsProps> = ({
  liked,
  setLiked,
  setOpenComments,
}) => {
  const onLikeButton = () => {
    setLiked((o) => !o);
  };

  return (
    <div className="flex items-center justify-between">
      <button
        className={classNames(
          liked ? "font-semibold text-purple-700 bg-gray-100" : "",
          "flex-1 btn py-2 text-purple-800 hover:bg-gray-200"
        )}
        onClick={onLikeButton}
      >
        Like
      </button>
      <button
        className="flex-1 btn py-2 text-purple-800 hover:bg-gray-200"
        onClick={() => setOpenComments(true)}
      >
        Comment
      </button>
      <button className="flex-1 btn py-2 text-purple-800 hover:bg-gray-200">
        Share
      </button>
    </div>
  );
};

type ftype = "post" | "share" | "like" | "comment";

interface PostProps {
  ftype: ftype;
  post_id: string;
  perpetaro_id: string;
}

export const Post: React.FC<PostProps> = ({ ftype, post_id, perpetaro_id }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [openComments, setOpenComments] = useState<boolean>(false);

  return (
    <div className="border rounded-lg shadow-lg" style={{ maxWidth: "600px" }}>
      <PostHead {...{ ftype, perpetaro_id }} />
      <PostBody />
      <div className="py-3 px-5">
        <PostStats {...{ liked, setOpenComments }} />
        <hr className="my-3" />
        <PostActions {...{ liked, setLiked, setOpenComments }} />
        {openComments ? (
          <>
            <hr className="my-3" />
            <PostComments {...{ post_id }} />
          </>
        ) : null}
      </div>
    </div>
  );
};
