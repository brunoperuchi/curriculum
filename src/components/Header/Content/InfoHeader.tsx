import { MenuSocial } from "./MenuSocial";

export function InfoHeader() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-1">
        Bruno Paulino Peruchi
      </h1>
      <div className="flex justify-between w-full">
        <MenuSocial />
        <p
          className="text-xs text-purple-500"
        >
          1998
        </p>
      </div>
    </div>
  );
}
