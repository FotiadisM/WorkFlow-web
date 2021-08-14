import { useLayoutEffect } from "@/src/useIsomorphicLayoutEffect";
import { classNames } from "@/src/util";
import React, { useEffect, useRef, useState } from "react";

const dummyComments: Comment[] = [
  {
    comment_id: "1",
    commentor_id: "1",
    text: "Wow this might be the best post ever",
    date: "14:34",
    likes: ["1", "2", "3"],
  },
  {
    comment_id: "2",
    commentor_id: "2",
    text: "YOLO",
    date: "14:34",
    likes: ["2", "3"],
  },
  {
    comment_id: "3",
    commentor_id: "3",
    text: "Flat Earth 4 EVER",
    date: "14:34",
    likes: ["1", "2", "3", "4"],
  },
  {
    comment_id: "4",
    commentor_id: "4",
    text: "FLWRE SFAIROYLI PSOFA",
    date: "14:34",
    likes: [],
  },
  {
    comment_id: "5",
    commentor_id: "5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    date: "14:34",
    likes: [""],
  },
];

interface CommentUserInputProps {
  post_id: string;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const CommentUserInput: React.FC<CommentUserInputProps> = ({
  post_id,
  setComments,
}) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [commentText, setCommentText] = useState<string>("");

  useLayoutEffect(() => {
    if (inputRef !== null) {
      if (inputRef.current !== null) {
        inputRef.current.focus();
      }
    }
  }, []);

  const onCommentPost = (e: React.FormEvent) => {
    e.preventDefault();

    // send request to server
    setComments((o) => [
      {
        comment_id: "6",
        commentor_id: "1",
        text: commentText,
        date: "16:48",
        likes: ["1"],
      },
      ...o,
    ]);
    setCommentText("");
  };

  return (
    <div className="flex item-center">
      <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="profile-picture"
      />
      <form className="flex-1 flex items-center ml-3" onSubmit={onCommentPost}>
        <textarea
          ref={inputRef}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="flex-1 px-3 py-1 mr-1 rounded-lg bg-purple-100 focus:outline-none"
          placeholder="Write a comment.."
        ></textarea>
        <button
          type="submit"
          className="focus:outline-none hover:bg-gray-200 rounded-md"
        >
          <span className="sr-only">Post the comment</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-10 w-10 text-purple-800"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

interface PostCommentProps {
  post_id: string;
  comment_id: string;
  commentor_id: string;
  text: string;
  date: string;
  likes: string[];
}

const PostComment: React.FC<PostCommentProps> = ({
  post_id,
  comment_id,
  commentor_id,
  text,
  date,
  likes,
}) => {
  const [postLiked, setPostLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(0);

  const onPostLike = () => {
    if (postLiked) {
      setPostLiked(false);
      setLikesCount((o) => o - 1);
    } else {
      setPostLiked(true);
      setLikesCount((o) => o + 1);
    }
  };

  useEffect(() => {
    const user_id = "1";

    if (likes.indexOf(user_id) != -1) {
      setPostLiked(true);
    }

    setLikesCount(likes.length);
  }, []);

  return (
    <div className="flex">
      <img
        className="mt-1 h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="profile-picture"
      />
      <div className="ml-3 flex items-center" style={{ maxWidth: "100%" }}>
        <div>
          <div className="px-3 py-2 rounded-lg bg-gray-100">
            <div className="font-semibold text-purple-500 hover:underline cursor-pointer">
              Tatas Michalis
            </div>
            <div className="text-gray-700">{text}</div>
          </div>
          <div className="flex items-center justify-between text-sm px-3">
            <div className="flex items-center">
              <div
                className={classNames(
                  postLiked
                    ? "text-purple-800 font-medium"
                    : "text-gray-600 hover:text-purple-800",
                  "cursor-pointer"
                )}
                onClick={onPostLike}
              >
                Like
              </div>
              <div className="ml-2 text-gray-400">{date}</div>
            </div>
            <div className="float-right flex items-center">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-3 w-3 text-purple-800"
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
              <div className="ml-1 text-gray-600">{likesCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PostCommentsProps {
  post_id: string;
}

interface Comment {
  comment_id: string;
  commentor_id: string;
  text: string;
  date: string;
  likes: string[];
}

export const PostComments: React.FC<PostCommentsProps> = ({ post_id }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    setComments(dummyComments);
  }, []);

  return (
    <div>
      <CommentUserInput {...{ post_id, setComments }} />
      <div className="mt-3 space-y-3">
        {comments.map((c) => (
          <PostComment key={c.comment_id} {...{ post_id, ...c }} />
        ))}
      </div>
    </div>
  );
};
