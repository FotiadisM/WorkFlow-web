import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface Notification {
  id: string;
  type: "friend-request";
  value: {
    user_id: string;
    time: string;
  };
}

const dummyNotifications: Notification[] = [
  {
    id: "1",
    type: "friend-request",
    value: {
      user_id: "1",
      time: "14:52",
    },
  },
  {
    id: "2",
    type: "friend-request",
    value: {
      user_id: "2",
      time: "18:28",
    },
  },
  {
    id: "3",
    type: "friend-request",
    value: {
      user_id: "3",
      time: "21:14",
    },
  },
];

interface NotificationsProps {}

export const Notifications: React.FC<NotificationsProps> = () => {
  return (
    <Menu as="div" className="ml-5">
      {({ open }) => (
        <>
          <Menu.Button className="p-1 text-gray-100 bg-purple-800 rounded-full hover:text-white focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-purple-100 focus:ring-white">
            <span className="sr-only">View notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </Menu.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 rounded-md space-y-3 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
            >
              {dummyNotifications.map((n) => (
                <Menu.Item key={n.id}>
                  <div className="px-2 flex items-center">
                    <div className="border-r pr-2">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="profile-picture"
                      />
                    </div>
                    <div className="ml-2 px-3">
                      <h4 className="text-sm">
                        {n.type === "friend-request"
                          ? "Connection Request from"
                          : "wtf?"}
                        <br />
                        Mike Fotiadis
                      </h4>
                      <div className="flex items-center space-x-3">
                        <button className="btn px-2 py-1 text-sm border border-purple-800 text-purple-800 hover:bg-purple-50">
                          Reject
                        </button>
                        <button className="btn px-2 py-1 text-sm bg-purple-800 text-white hover:bg-purple-900">
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
