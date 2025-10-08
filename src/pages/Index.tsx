import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import INeedSection from "@/components/INeedSection";
import PillarsSection from "@/components/PillarsSection";
import PhotoFeatureSection from "@/components/PhotoFeatureSection";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <Layout>
      <HeroSection />
      <INeedSection />
      <PhotoFeatureSection />
      <PillarsSection />
    </Layout>
  );
};

export default Index;
