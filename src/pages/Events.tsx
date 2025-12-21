import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Clock, AlertCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useEvents } from "@/hooks/useSanityData";
import { format } from "date-fns";

const Events = () => {
  const { data: sanityEvents, isLoading, error } = useEvents({ upcoming: true });
  
  // Fallback events
  const fallbackEvents = [
    {
      title: "Annual Fundraising Gala",
      date: "Coming Soon",
      time: "TBA",
      location: "To Be Announced",
      description: "Join us for an evening of celebration and support for The Rowan Center's mission.",
      category: "Fundraiser"
    },
    {
      title: "Community Awareness Walk",
      date: "Coming Soon",
      time: "TBA",
      location: "To Be Announced",
      description: "Walk together to raise awareness about sexual violence prevention and support survivors.",
      category: "Community"
    },
    {
      title: "Volunteer Training Session",
      date: "Coming Soon",
      time: "TBA",
      location: "The Rowan Center",
      description: "40-hour certification training for new crisis advocate volunteers.",
      category: "Training"
    }
  ];

  // Use Sanity data if available, otherwise fallback
  const upcomingEvents = sanityEvents && sanityEvents.length > 0 ? sanityEvents : fallbackEvents;

  // Loading state
  if (isLoading) {
    return (
      <Layout>
        <section className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Calendar className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-5xl font-seasons font-normal mb-6">Events</h1>
              <p className="text-xl font-roboto font-light text-white/90 mb-8">
                Join us at our upcoming events to support survivors, raise awareness, and strengthen our community.
              </p>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-6 max-w-4xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-64" />
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              Events
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              Join us at our upcoming events to support survivors, raise awareness, and strengthen our community.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {error && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md flex items-center gap-2 text-yellow-800 max-w-4xl mx-auto">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">Currently showing sample events. Add events in Sanity Studio to see them here.</span>
          </div>
        )}
        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Upcoming Events</h2>
            
            <div className="space-y-6">
              {upcomingEvents.map((event: any, index: number) => {
                const eventDescription = typeof event.description === 'string' ? event.description : event.description?.[0]?.children?.[0]?.text || 'Event details coming soon';
                const eventDate = event.date ? format(new Date(event.date), 'MMMM d, yyyy') : event.date || 'Coming Soon';
                
                return (
                  <Card key={event._id || index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-seasons text-2xl mb-2">{event.title}</CardTitle>
                          <CardDescription className="text-base">
                            <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                              {event.category}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-roboto mb-6">{eventDescription}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="font-roboto text-sm">{eventDate}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span className="font-roboto text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="font-roboto text-sm">{event.location}</span>
                        </div>
                      </div>
                      
                      {event.registrationLink ? (
                        <Button asChild>
                          <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                            Register Now
                          </a>
                        </Button>
                      ) : (
                        <Button disabled>
                          Registration Opens Soon
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Event Types</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons text-xl mb-2">Fundraisers</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Galas, walks, and special events to support our programs
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons text-xl mb-2">Community Programs</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Awareness events and educational workshops
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons text-xl mb-2">Training Sessions</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Volunteer certification and continuing education
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-accent/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl font-seasons text-center">Stay Informed</CardTitle>
                <CardDescription className="text-center text-base">
                  Subscribe to our newsletter to receive updates about upcoming events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-8 rounded-lg text-center">
                  <p className="font-roboto text-muted-foreground mb-4">
                    Newsletter subscription coming soon
                  </p>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Follow us on social media or contact us directly to stay updated on upcoming events
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;