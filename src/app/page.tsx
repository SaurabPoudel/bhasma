import Footer from "@/components/Footer";
import Demo from "@/components/landing/Demo";
import { FeaturesSectionDemo } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import Warning from "@/components/ui/Warning";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSectionDemo />
      <Demo />
      <Footer />
      <Warning />
    </>
  );
}
