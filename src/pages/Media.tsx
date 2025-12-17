import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, ExternalLink, Camera, FileText, Video } from "lucide-react";

const Media = () => {
  const pressReleases = [
    {
      title: "The Rowan Center Receives $500K Grant for Trauma Recovery Expansion",
      date: "March 15, 2024",
      summary: "New funding will allow The Rowan Center to double its trauma recovery clinic capacity and hire additional therapists.",
      type: "Press Release",
      downloadUrl: "#"
    },
    {
      title: "National Recognition for Prevention Education Program",
      date: "January 22, 2024",
      summary: "The Rowan Center's KidSafeHQ program recognized by National Center for Missing & Exploited Children.",
      type: "Press Release",
      downloadUrl: "#"
    },
    {
      title: "2023 Annual Impact Report Released",
      date: "December 8, 2023",
      summary: "Report shows 40% increase in survivors served and expansion of services across Southern Fairfield County.",
      type: "Annual Report",
      downloadUrl: "#"
    }
  ];

  const mediaKits = [
    {
      title: "General Media Kit",
      description: "Logos, fact sheets, executive bios, and organizational overview",
      lastUpdated: "March 2024",
      files: ["High-res logos", "Executive headshots", "Fact sheet", "Mission statement"]
    },
    {
      title: "Program Specific Kit",
      description: "Information about our three core programs: Prevent, Respond, Trauma Recovery",
      lastUpdated: "February 2024",
      files: ["Program overviews", "Statistics & impact", "Program images", "Contact information"]
    },
    {
      title: "Event Media Kit",
      description: "Resources for covering The Rowan Center events and fundraisers",
      lastUpdated: "January 2024",
      files: ["Event schedules", "Speaker bios", "Photo guidelines", "B-roll footage"]
    }
  ];

  const newsClips = [
    {
      title: "Connecticut Post: Local Non-Profit Expands Crisis Services",
      outlet: "Connecticut Post",
      date: "March 20, 2024",
      type: "News Article",
      url: "#"
    },
    {
      title: "Channel 8 News: Interview with Executive Director",
      outlet: "WTNH News 8",
      date: "February 14, 2024",
      type: "TV Interview",
      url: "#"
    },
    {
      title: "Stamford Advocate: Prevention Education in Schools",
      outlet: "Stamford Advocate",
      date: "January 30, 2024",
      type: "Feature Story",
      url: "#"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Media Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resources for journalists, media professionals, and community partners covering 
            The Rowan Center's work and impact in Southern Fairfield County.
          </p>
        </div>

        {/* Media Contact */}
        <section className="mb-16">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-4">Media Inquiries</CardTitle>
              <CardDescription className="text-lg">
                For interviews, quotes, or additional information about The Rowan Center
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Media Contact</h3>
                  <p className="text-muted-foreground">Sarah Johnson, Executive Director</p>
                  <p className="text-muted-foreground">media@rowancenternor.org</p>
                  <p className="text-muted-foreground">(203) 329-2929 ext. 101</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                  <p className="text-muted-foreground">Same-day response for urgent inquiries</p>
                  <p className="text-muted-foreground">24-48 hours for standard requests</p>
                  <p className="text-muted-foreground">Available for interviews M-F 9am-5pm</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Press Releases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Recent Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{release.title}</CardTitle>
                      <CardDescription className="text-base">{release.summary}</CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary">{release.type}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {release.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Media Kits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Media Kits</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {mediaKits.map((kit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 mb-3 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{kit.title}</CardTitle>
                  <CardDescription>{kit.description}</CardDescription>
                  <p className="text-xs text-muted-foreground">Updated: {kit.lastUpdated}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {kit.files.map((file, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {file}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Kit
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* News Coverage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Recent News Coverage</h2>
          <div className="space-y-4">
            {newsClips.map((clip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{clip.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{clip.outlet}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {clip.date}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {clip.type === "TV Interview" && <Video className="h-3 w-3 mr-1" />}
                          {clip.type}
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Media Guidelines */}
        <section>
          <Card className="border-accent/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Media Guidelines</CardTitle>
              <CardDescription>Important considerations when covering trauma and crisis services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Survivor Privacy</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Always protect survivor identity and confidentiality</li>
                    <li>• Use trauma-informed language in reporting</li>
                    <li>• Focus on services and support, not graphic details</li>
                    <li>• Provide resources and helpline information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Photography & Video</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Prior approval required for facility photography</li>
                    <li>• No identifying information in backgrounds</li>
                    <li>• Staff interviews available by appointment</li>
                    <li>• B-roll footage available upon request</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Media;