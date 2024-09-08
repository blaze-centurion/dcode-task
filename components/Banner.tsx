import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = ({
  title,
  content,
  featuredImage,
}: {
  title: string;
  content: string;
  featuredImage: string;
}) => {
  return (
    <>
      <div className={`w-full relative  h-[70vh] rounded-lg `}>
        <div className="-z-10 absolute w-[100%] h-[100%]">
          <Image
            src={featuredImage}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg "
            loading="lazy"
          />
        </div>
        <div className="max-w-[100%] h-full align-text-bottom bg-[#00000070] rounded-lg">
          <div className="absolute bottom-0 p-5 w-[80%]">
            <Link href="/">
              <h1 className="text-white text-[3em] font-[500]">{title}</h1>
            </Link>
            <p className="text-white pb-2 text-[15px]  opacity-70 font-[500]">
              {content.substring(1, 250)}{" "}
              <Link href="/" className="text-white">
                Read More...
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
