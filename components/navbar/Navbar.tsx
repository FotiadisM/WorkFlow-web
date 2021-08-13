import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from "@/src/util";
import { useLayoutEffect } from "@/src/useIsomorphicLayoutEffect";
import { ProfileOptions } from "./ProfileOptions";

const navigation: { name: string; href: string }[] = [
  { name: "Home", href: "/home" },
  { name: "Network", href: "/network" },
  { name: "Messages", href: "/conversations" },
  { name: "Job Openings", href: "/jobs" },
];

interface NavBarProps {
  getHeight?: (h: number) => void;
}

export default function Navbar({ getHeight }: NavBarProps) {
  const router = useRouter();

  useLayoutEffect(() => {
    if (getHeight !== undefined) {
      const nav = document.getElementById("navbar");
      if (nav !== null) {
        getHeight(nav.offsetHeight);
      }
    }
  }, []);

  return (
    <nav id="navbar" className="bg-purple-900">
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
            <button className="p-1 text-gray-100 bg-purple-800 rounded-full hover:text-white focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-purple-100 focus:ring-white">
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
            <ProfileOptions />
          </div>
        </div>
      </div>
    </nav>
  );
}
