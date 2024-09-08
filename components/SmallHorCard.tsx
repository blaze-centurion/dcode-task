import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmallHorCard = ({ title, content, featuredImage }: BlogDataTypes) => {
  return (
    <>
      <div className="flex my-2 h-[80px] pb-2 border-b border-[#ddd]">
        <Image
          src={featuredImage}
          width={90}
          height={90}
          alt={title}
          loading="lazy"
          className="rounded-sm"
        />
        <div className="pl-2">
          <h2 className="text-[14px] font-[500]">
            <Link href="/" className="hover:text-purple-400">
              {title.substring(0, 30)}
            </Link>
          </h2>
          <p className="text-[12px] text-[#585555]">
            {content.substring(0, 50)}
          </p>
        </div>
      </div>
    </>
  );
};

export default SmallHorCard;
