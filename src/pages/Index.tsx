import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import INeedSection from "@/components/INeedSection";
import PillarsSection from "@/components/PillarsSection";
import PhotoFeatureSection from "@/components/PhotoFeatureSection";
import CommunityPartnersSection from "@/components/CommunityPartnersSection";
import NewsTickerHome from "@/components/NewsTickerHome";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <Layout>
      <HeroSection />
      <NewsTickerHome />
      <INeedSection />
      <CommunityPartnersSection />
      <PhotoFeatureSection />
      <PillarsSection />
    </Layout>
  );
};

export default Index;
