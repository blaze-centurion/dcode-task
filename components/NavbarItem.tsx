import Link from "next/link";
import React from "react";

const NavbarItem = ({ name, link }: { name: string; link: string }) => {
  return (
    <>
      <li className="hover:underline">
        <Link href={link}>{name}</Link>
      </li>
    </>
  );
};

export default NavbarItem;
