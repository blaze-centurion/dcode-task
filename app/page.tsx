import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import TabContainer from "@/components/TabContainer";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <NavBar />
      <HeroSection />

      <div className="flex w-[95%] lg:px-2 m-auto mt-10 gap-2">
        <div className="featured  w-[75%]">
          <TabContainer />
        </div>
        <div className="w-[25%]">
          <CategorySection />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
