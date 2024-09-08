import { TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";

const TabItem = ({ name }: { name: string }) => {
  return (
    <>
      <TabsTrigger
        className="text-[15px] px-5 border-purple-400 border-2 rounded-[10pc] text-slate-800 py-2 data-[state=active]:bg-purple-400 data-[state=active]:text-white"
        value={name}
      >
        {name}
      </TabsTrigger>
    </>
  );
};

export default TabItem;
