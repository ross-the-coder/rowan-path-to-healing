import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import INeedSection from "@/components/INeedSection";
import PillarsSection from "@/components/PillarsSection";
import PhotoFeatureSection from "@/components/PhotoFeatureSection";
import KidsafeSection from "@/components/KidsafeSection";
import CommunityPartnersSection from "@/components/CommunityPartnersSection";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <Layout>
      <SEO 
        title="Home" 
        description="Preventing trauma, responding to crisis, and supporting healing in South Fairfield County, CT."
      />
      <Reveal>
        <HeroSection />
      </Reveal>
      <Reveal>
        <INeedSection />
      </Reveal>
      <Reveal>
        <KidsafeSection />
      </Reveal>
      <Reveal>
        <PillarsSection />
      </Reveal>
      <Reveal>
        <PhotoFeatureSection />
      </Reveal>
      <Reveal>
        <CommunityPartnersSection />
      </Reveal>
    </Layout>
  );
};

export default Index;
