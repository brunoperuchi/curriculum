import {Popover } from "@headlessui/react";
import { CaretDown, GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

const menuItems = [
  {
    name: 'GitHub',
    href: 'https://www.github.com/brunoperuchi',
    icon: <GithubLogo />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/brunopaulinoperuchi/',
    icon: <LinkedinLogo />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/brunoperuchi/',
    icon: <InstagramLogo />,
  },
]

export function MenuSocial() {
  return (
    <Popover className="flex flex-col items-start">
      <Popover.Button className="flex items-center gap-2 px-2 py-1 mt-1 rounded-md border-2 border-transparent hover:border-purple-800 focus:border-purple-800 focus:outline-none transition-colors">
        Social
        <CaretDown />
      </Popover.Button>
      <Popover.Panel className="flex flex-col gap-1 first-letter:z-10 p-2 bg-zinc-700 rounded-md mt-1 shadow-lg">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            className="flex items-center gap-2 p-1 rounded-md border-2 border-transparent hover:bg-purple-800 focus:bg-purple-800 focus:outline-none transition-colors"
          >
            {item.icon}
            {item.name}
          </a>
        ))}
      </Popover.Panel>
    </Popover>
  );
}