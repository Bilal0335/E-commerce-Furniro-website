// import FontShowcase from "@/components/Fonts";
import Hero from "@/components/Hero";
import Brands from "./brands/page";
import HeroRange from "@/components/HeroRange";
import ProductSection from "@/components/Products";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <FontShowcase/> */}
      <HeroRange />
      <ProductSection />
      <Brands />
    </div>
  );
}
