import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex absolute top-0 left-0 w-full shadow-md h-header items-center px-3vw">
      <Link href="/" className="font-bold text-2xl">
        LOGO
      </Link>
    </header>
  );
};

export default Header;
