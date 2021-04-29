import { useLayoutEffect } from "@/src/useIsomorphicLayoutEffect";
import React, { useRef } from "react";

const dummyText: string[] = [
  "Wow this might be the best post ever",
  "YOLO",
  "Flat Earth 4 EVER",
  "FLWRE SFAIROYLI PSOFA",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
];

interface CommentUserInputProps {}

const CommentUserInput: React.FC<CommentUserInputProps> = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useLayoutEffect(() => {
    if (inputRef !== null) {
      if (inputRef.current !== null) {
        inputRef.current.focus();
      }
    }
  }, []);

  const onCommentPost = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("COMMENT POST");
  };

  return (
    <div className="flex item-center">
      <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="profile-picture"
      />
      <form className="flex-1 flex items-center ml-3" onSubmit={onCommentPost}>
        <input
          ref={inputRef}
          type="textarea"
          className="flex-1 px-3 py-1 mr-1 rounded-lg bg-purple-100 focus:outline-none"
          placeholder="Write a comment.."
        />
        <button type="submit" className="focus:outline-none">
          <span className="sr-only">Post the comment</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-7 w-7 text-purple-800"
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
  text: string;
  likes?: string;
}

const PostComment: React.FC<PostCommentProps> = ({ text }) => {
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
              <div className="text-gray-600 cursor-pointer hover:text-purple-800">
                Like
              </div>
              <div className="ml-1 text-gray-400">4:34</div>
            </div>
            <div className="float-right flex items-center">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
              >
                <path
                  d="m0 1v8c0 .552246.447693 1 1 1h3v-10h-3c-.552307 0-1 .447693-1 1z"
                  transform="translate(0 5)"
                  fill="#5d21b6"
                />
                <path
                  d="m9.15332 5.02979h-2.9541c-.258301 0-.387695-.172363-.431152-.246582-.043457-.0737305-.131348-.270508-.0063477-.496094l1.0415-1.87549c.228516-.410645.251953-.893555.0649414-1.32471-.187012-.43164-.556152-.744629-1.0127-.858398l-.734375-.183594c-.178711-.0449219-.368164.0122071-.492676.150391l-3.9873 4.42969c-.413574.460449-.641113 1.0542-.641113 1.67236v5.23242c0 1.37842 1.12158 2.5 2.5 2.5l4.97412-.0004883c1.12305 0 2.11475-.756348 2.41113-1.83887l1.06738-4.89844c.03125-.13623.0473633-.275879.0473633-.415527 0-1.01807-.828613-1.84668-1.84668-1.84668z"
                  transform="translate(5 .97)"
                  fill="#5d21b6"
                />
              </svg>
              <div className="ml-1 text-gray-600">44</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PostCommentsProps {}

export const PostComments: React.FC<PostCommentsProps> = () => {
  return (
    <div>
      <CommentUserInput />
      <div className="mt-3 space-y-3">
        {dummyText.map((c) => (
          <PostComment text={c} />
        ))}
      </div>
    </div>
  );
};
