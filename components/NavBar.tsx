import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between px-10 pt-4">
        <Image
          src="/assets/logo.png"
          width={300}
          height={300}
          alt="Logo"
          className="invert"
        />

        <ul className="flex items-center gap-5  text-[17px] font-[500]">
          <li>
            <Link href="/">Featured</Link>
          </li>
          <li>
            <Link href="/">New</Link>
          </li>
          <li>
            <Link href="/">Popular</Link>
          </li>
          <li>
            <Button className="bg-purple-400  px-5 py-[6px] h-auto text-[16px] font-semibold">
              <Link href="/">Login</Link>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
