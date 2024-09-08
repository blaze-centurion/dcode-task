"use client";

import React, { useRef } from "react";
import SmallHorCard from "./SmallHorCard";
import { BlogsData } from "@/lib/BlogsData";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Banner from "./Banner";

const HeroSection = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <>
      <div className="flex w-[95%] lg:px-2 m-auto mt-10 gap-2">
        <div className="featured  lg:w-[75%] md:w-[70%] ">
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {BlogsData.map((item) => {
                return (
                  item.categories.includes("Featured") && (
                    <>
                      <CarouselItem key={item.id}>
                        <Banner
                          title={item.title}
                          content={item.content}
                          featuredImage={item.featuredImage}
                        />
                      </CarouselItem>
                    </>
                  )
                );
              })}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
        <div className="new lg:w-[25%] md:w-[30%] bg-white min-w-[150px] max-h-[70vh] overflow-auto card-box-shadow p-3 py-5 ">
          <div className="w-full border-b border-slate-300 pb-2 mb-5">
            <h1 className="text-lg font-[500]">Recent Announcements</h1>
          </div>
          {BlogsData.map((item) => {
            return (
              item.categories.includes("Announcements") && (
                <SmallHorCard key={item.id} {...item} />
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
