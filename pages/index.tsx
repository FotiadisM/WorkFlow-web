import Link from "next/link";

const navigation: { name: string; href: string }[] = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-8">
      <div className="flex items-center space-x-10">
        <img
          className="h-10 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        />
        {navigation.map((i) => (
          <Link href={i.href}>
            <a className="text-lg text-gray-500 hover:text-gray-800">
              {i.name}
            </a>
          </Link>
        ))}
      </div>
      <button className="px-2 py-1 rounded-md border-2 border-purple-800 text-lg text-purple-800 hover:text-white hover:bg-purple-800 focus:outline-none">
        Sign Up
      </button>
    </nav>
  );
}

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main></main>
    </>
  );
}
