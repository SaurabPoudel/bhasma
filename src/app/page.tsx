import Footer from "@/components/Footer";
import { FeaturesSectionDemo } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import Warning from "@/components/ui/Warning";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSectionDemo />
      <Footer />
      <Warning />
    </>
  );
}
