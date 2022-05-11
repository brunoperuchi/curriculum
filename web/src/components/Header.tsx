import { MenuSocial } from "./MenuSocial";

export function Header() {
  return (
    <header className="bg-zinc-800 text-zinc-100 flex justify-center gap-5 py-3 h-28 w-full">
      <img
        src="https://avatars.githubusercontent.com/u/69209246?v=4"
        alt="Foto do Peruchi"
        className="w-20 h-20 rounded-full border-2 border-transparent hover:border-purple-800 transition-colors"
      />

      <div className="flex flex-col items-center">
        <h1 className="text-2xl">Bruno Paulino Peruchi</h1>
        <div className="flex justify-between w-full">
          <MenuSocial />
          <p className="text-purple-500 hover:text-purple-800 transition-colors">1998</p>
        </div>
      </div>
    </header>
  );
}