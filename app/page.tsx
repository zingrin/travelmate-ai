import Hero from "./components/Hero";
import PopularDestinations from "./components/PopularDestinations";
import TravelCategories from "./components/TravelCategories";
import FAQ from "./faq/page";
import FeaturedPackages from "./package/page";
import Newsletter from "./pages/Newsletter";
import StatsSection from "./pages/StatsSection";
import Testimonials from "./pages/Testimonials";
import WhyChooseUs from "./pages/WhyChooseUs";

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
