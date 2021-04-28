import { classNames } from "@/src/util";

interface UserProps {
  user: { id: string; name: string; image: string };
  current: boolean;
  setCurUser: () => void;
}

export default function User({ user, current, setCurUser }: UserProps) {
  return (
    <div
      className={classNames(
        current ? "bg-gray-200 text-purple-800" : "hover:bg-gray-100",
        "flex items-center border rounded-md py-2 px-3 cursor-pointer"
      )}
      onClick={setCurUser}
    >
      <img className="rounded-full h-10 w-10 mr-4" src={user.image} />
      <div>{user.name}</div>
    </div>
  );
}
