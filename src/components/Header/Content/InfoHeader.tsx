import { MenuSocial } from "./MenuSocial";

export function InfoHeader() {
  return (
    <div className="flex items-center gap-4 ">
      <img
        src="https://avatars.githubusercontent.com/u/69209246?v=4"
        alt="Author photo"
        className="w-16 h-16 rounded-full"
      />

      <div className="flex flex-col items-center">
        <h1>
          Bruno Paulino Peruchi
        </h1>
        <div className="flex justify-between w-full">
          <MenuSocial />
          <p
            className="text-sm text-purple-500"
          >
            1998
          </p>
        </div>
      </div>
    </div>
  );
}
