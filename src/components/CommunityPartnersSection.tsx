import { Card, CardContent } from "@/components/ui/card";
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

const createAnchorId = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const partners = [
  {
    name: "Anchor Health",
    description: "Community health and wellness services.",
    anchorId: createAnchorId("Anchor Health"),
    logo: "https://anchorhealthct.org/wp-content/uploads/2022/02/Stacked_Logomark_Gradient_Large-1024x476.png",
  },
  {
    name: "Building One Community",
    description: "Community services and immigrant support.",
    anchorId: createAnchorId("Building One Community"),
    logo: "https://b1c.org/wp-content/uploads/B1C-10-YR-Color.jpg",
  },
  {
    name: "CT Alliance to End Sexual Violence",
    description: "Statewide advocacy and survivor support.",
    anchorId: createAnchorId("CT Alliance to End Sexual Violence"),
    logo: "https://projectworldimpact.com/images/organization/1621257799-alliancelogonew.png",
  },
  {
    name: "DVCC",
    description: "Domestic violence crisis services.",
    anchorId: createAnchorId("DVCC (Domestic Violence Crisis Center)"),
    logo: "https://www.dvccct.org/wp-content/uploads/2021/08/DVCC-logo-2021-P2627-01-300x300.png",
  },
  {
    name: "Kids in Crisis",
    description: "Youth crisis services and support.",
    anchorId: createAnchorId("Kids in Crisis"),
    logo: "https://www.kidsincrisis.org/wp-content/themes/iop-kidsincrisis-1_0_2/dist/images/kids-in-crisis-logo%402x.png",
  },
  {
    name: "New Canaan Abuse Prevention Partnership",
    description: "Prevention and community education.",
    anchorId: createAnchorId("New Canaan Abuse Prevention Partnership"),
    logo: "https://static.wixstatic.com/media/3a271d_ded460a8e5aa4896a6dbd6efa698ad4f~mv2.png/v1/fill/w_359%2Ch_47%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/NewCanaanAPPLogo%20new%20white.png",
  },
  {
    name: "New Canaan Behavioral Health Alliance",
    description: "Behavioral health resources and prevention.",
    anchorId: createAnchorId("New Canaan Behavioral Health Alliance"),
    logo: "https://newcanaanbha.org/wp-content/uploads/2024/03/NCBHA-Logo-FINAL.jpg",
  },
];

const CommunityPartnersSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Together, we create a stronger, safer community through collaborative partnerships
          </p>
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
            {partners.map((partner, index) => (
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
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
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
