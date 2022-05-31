import { InfoHeader } from "./Content/InfoHeader";
import { NavHeader } from "./Content/NavHeader";

export function Header() {
  return (
    <header className="w-full py-1 fixed z-30 bg-zinc-800 text-zinc-100 shadow-md">
      <div className="m-auto w-[90%] grid gap-2 sm:grid-cols-2 items-center justify-items-center">
        <InfoHeader />
        <NavHeader />
      </div>
    </header>
  );
}
