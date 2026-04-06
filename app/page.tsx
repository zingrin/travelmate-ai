import Hero from "./components/Hero";
import PopularDestinations from "./components/PopularDestinations";
import TravelCategories from "./components/TravelCategories";
import WhyChooseUs from "./pages/WhyChooseUs";
import FeaturedPackages from "./pakages/[id]/page";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <>
        <Hero />
        <PopularDestinations />
        <TravelCategories />
        <FeaturedPackages />
        <WhyChooseUs />
      </>
    </div>
  );
}
