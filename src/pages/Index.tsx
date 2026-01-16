import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AlertRibbon from "@/components/AlertRibbon";
import INeedSection from "@/components/INeedSection";
import PillarsSection from "@/components/PillarsSection";
import PhotoFeatureSection from "@/components/PhotoFeatureSection";
import KidsafeSection from "@/components/KidsafeSection";
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
      <AlertRibbon />
      <INeedSection />
      <KidsafeSection />
      <PillarsSection />
      <PhotoFeatureSection />
      <CommunityPartnersSection />
    </Layout>
  );
};

export default Index;
