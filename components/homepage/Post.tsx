import { classNames } from "@/src/util";
import { Dispatch, SetStateAction, useState } from "react";
import { PostComments } from "./PostComments";
import { PostHead } from "./PostHead";

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
          viewBox="0 0 16 16"
          fill="currentColor"
          className={classNames(liked ? "text-purple-800" : "", "h-5 w-5")}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m0 1v8c0 .552246.447693 1 1 1h3v-10h-3c-.552307 0-1 .447693-1 1z"
            transform="translate(0 5)"
          />
          <path
            d="m9.15332 5.02979h-2.9541c-.258301 0-.387695-.172363-.431152-.246582-.043457-.0737305-.131348-.270508-.0063477-.496094l1.0415-1.87549c.228516-.410645.251953-.893555.0649414-1.32471-.187012-.43164-.556152-.744629-1.0127-.858398l-.734375-.183594c-.178711-.0449219-.368164.0122071-.492676.150391l-3.9873 4.42969c-.413574.460449-.641113 1.0542-.641113 1.67236v5.23242c0 1.37842 1.12158 2.5 2.5 2.5l4.97412-.0004883c1.12305 0 2.11475-.756348 2.41113-1.83887l1.06738-4.89844c.03125-.13623.0473633-.275879.0473633-.415527 0-1.01807-.828613-1.84668-1.84668-1.84668z"
            transform="translate(5 .97)"
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
  perpetaror_id: string;
}

export const Post: React.FC<PostProps> = ({
  ftype,
  post_id,
  perpetaror_id,
}) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [openComments, setOpenComments] = useState<boolean>(false);

  return (
    <div className="border rounded-lg shadow-lg" style={{ maxWidth: "600px" }}>
      <PostHead {...{ ftype, perpetaror_id }} />
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
