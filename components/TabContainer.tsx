import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import TabItem from "./TabItem";
import { TabData } from "@/lib/TabsData";
import BlogCard from "./BlogCard";
import { BlogsData } from "@/lib/BlogsData";

const TabContainer = () => {
  return (
    <>
      <Tabs
        defaultValue={TabData[0].name}
        className="w-full overflow-x-auto py-2 remove-scrollbar"
      >
        <TabsList className="w-fit flex justify-between text-wrap bg-transparent gap-2 ">
          {TabData.map((item) => (
            <TabItem name={item.name} key={item.name} />
          ))}
        </TabsList>
        {TabData.map((item) => (
          <TabsContent className="my-5 mx-1" value={item.name} key={item.name}>
            <div className="flex flex-wrap gap-2">
              {BlogsData.map((blogItem) => {
                return (
                  blogItem.categories.includes(item.name) && (
                    <BlogCard key={blogItem.id} {...blogItem} />
                  )
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default TabContainer;
