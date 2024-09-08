import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({
  tags,
  title,
  content,
  author,
  date,
  featuredImage,
}: BlogDataTypes) => {
  const dateObj = new Date(date);
  return (
    <>
      <Card className="w-[300px] min-w-[320px] ">
        <CardContent className="p-0">
          {/* <div className="w-full h-[280px] bg-[url('/assets/photo1.jpg')] bg-cover py-2 px-2"> */}
          <div className="w-full h-[280px]  relative ">
            <div className="relative w-full h-full">
              <Image
                src={featuredImage}
                alt={title}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-tl-lg rounded-tr-lg "
                loading="lazy"
              />
            </div>
            <div className="absolute top-2 left-2">
              {tags.map((tag) => (
                <Badge className="mr-1 z-10" key={tag}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="px-3">
            <div className=" justify-between py-2">
              <p className="text-sm font-[500] text-slate-800">
                Published On{" "}
                {`${dateObj.getDay()} ${dateObj.getMonth()}, ${dateObj.getFullYear()}`}
              </p>
              <p className="text-sm font-[500] text-slate-800">
                By <Link href="/">{author}</Link>
              </p>
            </div>
            <Link href="/">
              <h1 className=" text-gray-800 text-[22px] font-[600] hover:text-purple-400">
                {title}
              </h1>
            </Link>
            <p className=" pb-2 text-[15px] text-[#585555] font-[400]">
              {content.substring(0, 180)}{" "}
              <Link href="/" className="text-black">
                Read More...
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BlogCard;
