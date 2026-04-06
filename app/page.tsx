import FAQ from "./components/FQA";
import Hero from "./components/Hero";
import PopularDestinations from "./components/PopularDestinations";
import TravelCategories from "./components/TravelCategories";
import Newsletter from "./pages/Newsletter";
import StatsSection from "./pages/StatsSection";
import Testimonials from "./pages/Testimonials";
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
        <StatsSection />

        <Testimonials />
        <FAQ />
        <Newsletter />
      </>
    </div>
  );
}
