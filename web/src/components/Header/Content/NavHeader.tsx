import { Tab } from "@headlessui/react";

const navItems = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Tech Skills",
  },
]

export function NavHeader() {
  return (
    <nav
      className="flex gap-4 h-10"
    >
      {navItems.map((item) => (
        <button  
          key={item.name}
          className="px-2 py-1 text-sm rounded-sm border-b-4 border-zinc-700 hover:border-purple-800 focus:border-purple-800 focus:outline-none transition-colors"
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
}