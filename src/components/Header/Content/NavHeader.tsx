const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Tech Skills",
    href: "#skills",
  },
]

export function NavHeader() {
  return (
    <nav className="flex gap-4">
      {navItems.map((item) => (
        <a 
          key={item.name}
          href={item.href}
          className="p-1 text-sm rounded-sm border-b-2 border-zinc-700 hover:border-purple-800 focus:border-purple-800 focus:outline-none transition-colors"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
