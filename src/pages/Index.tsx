import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import INeedSection from "@/components/INeedSection";
import PillarsSection from "@/components/PillarsSection";
import PhotoFeatureSection from "@/components/PhotoFeatureSection";
import CommunityPartnersSection from "@/components/CommunityPartnersSection";
import { SEO } from "@/components/SEO";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <Layout>
      <SEO 
        title="Home" 
        description="Preventing trauma, responding to crisis, and supporting healing in South Fairfield County, CT."
      />
      <HeroSection />
      <INeedSection />
      <PhotoFeatureSection />
      <PillarsSection />
      <CommunityPartnersSection />
    </Layout>
  );
};

export default Index;
