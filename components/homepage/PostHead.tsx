const PostType: React.FC<PostHeadProps> = ({ ftype, perpetaror_id }) => {
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

type ftype = "post" | "share" | "like" | "comment";

interface PostHeadProps {
  ftype: ftype;
  perpetaror_id: string;
}

export const PostHead: React.FC<PostHeadProps> = ({ ftype, perpetaror_id }) => {
  return (
    <div className="pt-4 px-3">
      <PostType {...{ ftype, perpetaror_id }} />
      <div className="flex items-center justify-between mx-3">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile-picture"
          />
          <div className="ml-3 font-semibold text-purple-700 cursor-pointer hover:underline">
            Mike Fotiadis
          </div>
        </div>
        <div className="text-gray-600">12:31</div>
      </div>
    </div>
  );
};
