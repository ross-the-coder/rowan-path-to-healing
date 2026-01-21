import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { communityResources } from "@/data/communityResourcesData";

const createAnchorId = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const partners = [
  {
    name: "StamfordConnect",
    description: "City resource guide and community services.",
    anchorId: createAnchorId("StamfordConnect"),
    logo: "https://www.fergusonlibrary.org/sites/default/files/2026-01/StamfordConnect%20Banner%202026.png",
  },
  {
    name: "Catalyst CT",
    description: "Community hub and support services.",
    anchorId: createAnchorId("Catalyst CT"),
    logo: "https://catalystct.org/wp-content/uploads/2024/04/CatalystCT_Logo.svg",
  },
  {
    name: "Resources to Recover",
    description: "Recovery support and community resources.",
    anchorId: createAnchorId("Resources to Recover"),
    logo: "https://www.rtor.org/wp-content/uploads/2025/11/rtor.org-registered_nb-1024x239.png",
  },
  {
    name: "Stamford Health",
    description: "Healthcare services for the community.",
    anchorId: createAnchorId("Stamford Health"),
    logo: "https://assets.stamfordhealth.org/image/upload/f_auto,q_auto:good,dpr_auto,c_auto,g_auto/shlogohp?iar=0",
  },
  {
    name: "Child Guidance Center of Southern Connecticut",
    description: "Behavioral health care for children and families.",
    anchorId: createAnchorId("Child Guidance Center of Southern Connecticut"),
    logo: "https://www.childguidancect.org/wp-content/uploads/2025/11/cgc_logo.png",
  },
  {
    name: "Liberation Programs",
    description: "Addiction treatment and recovery services.",
    anchorId: createAnchorId("Liberation Programs"),
    logo: "https://liberationprograms.org/wp-content/uploads/2025/05/LP_logo2025_4C_vert.png",
  },
  {
    name: "Person to Person",
    description: "Food, clothing, and financial assistance.",
    anchorId: createAnchorId("Person to Person"),
    logo: "https://p2phelps.org/wp-content/uploads/2022/07/PersonToPersonHRGB-730x160.png",
  },
  {
    name: "SilverSource",
    description: "Support for seniors in the community.",
    anchorId: createAnchorId("SilverSource"),
    logo: "https://silversource.org/htdocs/wp-content/uploads/2022/10/silver-source-logo.webp",
  },
];

const CommunityPartnersSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const resourceUrlByAnchorId = new Map(
    communityResources.map(resource => [createAnchorId(resource.name), resource.url])
  );

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Community Partners</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-none mx-auto sm:whitespace-nowrap">
            Together, we create a stronger, safer community through collaborative partnerships
          </p>
          <div className="mt-6 flex justify-center">
            <Link to="/resources">
              <Button>See More of Our Partnerships</Button>
            </Link>
          </div>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={setApi}
          className="w-full max-w-6xl mx-auto py-6"
        >
          <CarouselContent className="-ml-2 md:-ml-4" viewportClassName="overflow-visible py-8">
            {partners.map((partner, index) => {
              const resourceUrl = resourceUrlByAnchorId.get(partner.anchorId);
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Link
                  to={`/resources#${partner.anchorId}`}
                  aria-label={`View ${partner.name} in community resources`}
                  className="block"
                >
                  <Card
                    className={`h-full transition-all duration-300 ease-out ${
                      selectedIndex === index
                        ? "scale-105 md:scale-110 shadow-2xl opacity-100 blur-0 z-10"
                        : "scale-95 opacity-60 blur-[1px] shadow-lg"
                    }`}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className="w-48 h-32 mb-5 rounded-lg bg-white/70 flex items-center justify-center p-2 shadow-sm">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {partner.name}
                      </h3>
                      {partner.description && (
                        <p className="text-sm text-muted-foreground">
                          {partner.description}
                        </p>
                      )}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-4"
                        onClick={event => {
                          if (!resourceUrl) return;
                          event.preventDefault();
                          event.stopPropagation();
                          window.open(resourceUrl, "_blank", "noopener,noreferrer");
                        }}
                        disabled={!resourceUrl}
                      >
                        Visit {partner.name}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-center gap-4">
            <CarouselPrevious
              className="static translate-y-0 rotate-0 h-11 w-11 bg-accent/15 text-accent border-accent/30 hover:bg-accent/30 active:bg-accent active:text-white"
            />
            <CarouselNext
              className="static translate-y-0 rotate-0 h-11 w-11 bg-accent/15 text-accent border-accent/30 hover:bg-accent/30 active:bg-accent active:text-white"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CommunityPartnersSection;
