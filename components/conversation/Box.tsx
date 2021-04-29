import { useRef, useState } from "react";
import { classNames } from "@/src/util";
import { useLayoutEffect } from "@/src/useIsomorphicLayoutEffect";

interface Message {
  convID: string;
  userID: string;
  timestamp: string;
  text: string;
}

const testMessages: Message[] = [
  { convID: "1", userID: "1", timestamp: "12124512", text: "hello" },
  { convID: "1", userID: "1", timestamp: "12124512", text: "what's up" },
  { convID: "1", userID: "2", timestamp: "12124512", text: "hello, good, y?" },
  { convID: "1", userID: "1", timestamp: "12124512", text: "fine" },
  {
    convID: "1",
    userID: "2",
    timestamp: "12124512",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.e",
  },
];

interface BoxProps {
  user: { id: string; name: string; image: string };
}

export default function Box({ user }: BoxProps) {
  const [messages, setMessages] = useState<Message[]>(testMessages);
  const [curMsg, setCurMsg] = useState<string>("");
  const msgBox = useRef<HTMLDivElement>(null);

  const onMessageSent = (e: React.FormEvent) => {
    e.preventDefault();

    if (curMsg !== undefined) {
      setMessages((m) => [
        ...m,
        { convID: "1", userID: "2", timestamp: "451245", text: curMsg },
      ]);
      setCurMsg("");
    }
  };

  useLayoutEffect(() => {
    if (msgBox !== null) {
      if (msgBox.current !== null) {
        msgBox.current.scrollTop = msgBox.current.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <div className="ml-7 max-h-full" style={{ width: "50vw" }}>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center pb-4">
            <img className="rounded-full h-14 w-14 mr-4" src={user.image} />
            <h1 className="text-2xl font-semibold">{user.name}</h1>
          </div>
          <div className="text-gray-600">12:43</div>
        </div>
        <hr />
      </div>

      <div className="pt-4">
        <div
          ref={msgBox}
          className="flex flex-col space-y-2 px-5 overflow-y-auto"
          style={{ height: "420px" }}
        >
          {messages.map((m) => (
            <div
              className={classNames(
                m.userID === user.id
                  ? "bg-gray-100 text-gray-800"
                  : "bg-purple-800 text-white",
                "px-2 py-1 rounded-md"
              )}
              style={{
                maxWidth: "40%",
                alignSelf: m.userID === user.id ? "flex-start" : "flex-end",
              }}
            >
              {m.text}
            </div>
          ))}
        </div>
        <form className="flex items-center pt-4" onSubmit={onMessageSent}>
          <input
            className="w-full px-3 py-1 bg-gray-100 rounded-md focus:outline-none"
            value={curMsg}
            onChange={(e) => setCurMsg(e.target.value)}
            placeholder="Send a message.."
            autoFocus
          />
          <button type="submit" className="focus:outline-none">
            <span className="sr-only">Send message</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-7 w-7 m-2 text-purple-800"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
