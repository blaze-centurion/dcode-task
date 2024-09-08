import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between mt-4 w-[95%] m-auto p-4 border-t border-[#ddd]">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            width={300}
            height={300}
            alt="Logo"
            className="invert"
          />
        </Link>
        <ul className="flex gap-3">
          <li>
            <Link href="https://www.instagram.com/nsut.official/?hl=en">
              <Instagram />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/nsutofficial/">
              <Facebook />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@nsutdelhi">
              <Youtube />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
