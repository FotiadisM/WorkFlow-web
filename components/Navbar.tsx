import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

const navigation: { name: string; href: string }[] = [
  { name: "Home", href: "/home" },
  { name: "Network", href: "#" },
  { name: "Messages", href: "/conversations" },
  { name: "Job Openings", href: "/jobs" },
];

const profileOptions: { name: string; href: string }[] = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/" },
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-purple-800">
      <div className="px-10 py-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <img
              className="block h-8 w-auto texg-white"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  key={item.name}
                  className={classNames(
                    router.route === item.href
                      ? "bg-purple-300 text-gray-700"
                      : "text-gray-100 hover:bg-purple-600",
                    "px-3 py-2 rounded-md text-sm font-medium"
                  )}
                  aria-current={router.route === item.href ? "page" : undefined}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <button className="bg-purple-800 p-1 rounded-full text-gray-100 hover:text-white focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-purple-100 focus:ring-white">
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
            </button>
            <Menu as="div" className="ml-5">
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className="bg-purple-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-100 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="profile-picture"
                      />
                    </Menu.Button>
                  </div>
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
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      {profileOptions.map((p) => (
                        <Menu.Item key={p.name}>
                          {({ active }) => (
                            <Link href={p.href}>
                              <a
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 hover:bg-purple-800 hover:text-white"
                                )}
                              >
                                {p.name}
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
