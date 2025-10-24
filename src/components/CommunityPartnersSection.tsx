import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const partners = [
  {
    name: "United Way of Coastal Fairfield County",
    description: "Supporting community programs and initiatives throughout the region.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop"
  },
  {
    name: "Stamford Hospital",
    description: "Providing comprehensive healthcare and crisis intervention services.",
    logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=200&fit=crop"
  },
  {
    name: "Stamford Public Schools",
    description: "Partnering to ensure student safety and wellbeing education.",
    logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=200&fit=crop"
  },
  {
    name: "CT Coalition Against Domestic Violence",
    description: "Statewide advocacy and support for survivors of domestic violence.",
    logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=200&fit=crop"
  },
  {
    name: "Fairfield County Community Foundation",
    description: "Funding vital programs that strengthen our community.",
    logo: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=200&h=200&fit=crop"
  },
  {
    name: "City of Stamford",
    description: "Municipal partnership for public safety and community services.",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop"
  }
];

const CommunityPartnersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Community Partners</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Together, we create a stronger, safer community through collaborative partnerships
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default CommunityPartnersSection;
