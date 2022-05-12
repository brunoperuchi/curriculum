import { InfoHeader } from "./InfoHeader";
import { NavHeader } from "./NavHeader";

export function Header() {
  return (
    <header
    className="bg-zinc-800 text-zinc-100 flex flex-col sm:flex-row items-center sm:justify-around w-full py-1"
    >
      <InfoHeader />
      <NavHeader />
    </header>
  );
}