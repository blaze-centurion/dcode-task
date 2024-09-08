import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import NavbarItem from "./NavbarItem";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between px-10 pt-4">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            width={300}
            height={300}
            alt="Logo"
            className="invert"
          />
        </Link>

        <ul className="flex items-center gap-5  text-[17px] font-[500]">
          <NavbarItem name="Featured" link="/" />
          <NavbarItem name="Announcements" link="/" />
          <NavbarItem name="Upcoming Events" link="/" />
          <NavbarItem name="Login" link="/" />

          <li className="hover:underline">
            <Button className="bg-purple-400  px-5 py-[6px] h-auto text-[16px] font-semibold">
              <Link href="/">Sign Up</Link>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
