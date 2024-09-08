import { CategoriesData } from "@/lib/CategoriesData";
import Link from "next/link";
import React from "react";

const CategorySection = () => {
  return (
    <>
      <div className="new bg-white card-box-shadow rounded-[4px] p-6 px-6 min-w-[250px]">
        <h2 className="text-[20px] font-[500]">Explore Categories</h2>
        <ul className="py-1">
          {CategoriesData.map((item, index) => (
            <>
              <li
                className="hover:underline my-3 hover:text-purple-400 font-[500] text-[16px]"
                key={index}
              >
                <Link href="/">{item.name}</Link>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategorySection;
