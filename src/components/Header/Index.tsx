import { InfoHeader } from "./Content/InfoHeader";
import { NavHeader } from "./Content/NavHeader";

export function Header() {
  return (
    <header className="fixed z-30 bg-zinc-800 text-zinc-100 flex flex-col sm:flex-row items-center sm:justify-around w-full py-1">
      <InfoHeader />
      <NavHeader />
    </header>
  );
}