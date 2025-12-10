import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  ExternalLink, 
  Phone, 
  MapPin, 
  Filter, 
  X, 
  Building2, 
  School, 
  Handshake, 
  Globe,
  ChevronDown
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { 
  communityResources, 
  getUniqueCategories, 
  getUniqueResourceTypes, 
  getUniqueCatchmentAreas,
  type CommunityResource 
} from "@/data/communityResourcesData";
import resourcesImage from "@/assets/resources-learning.jpg";

const CommunityResources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedResourceType, setSelectedResourceType] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);

  const categories = getUniqueCategories();
  const resourceTypes = getUniqueResourceTypes();
  const locations = getUniqueCatchmentAreas();

  const filteredResources = useMemo(() => {
    return communityResources.filter((resource) => {
      const matchesSearch = 
        searchQuery === "" ||
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = 
        selectedCategory === "all" || resource.category === selectedCategory;

      const matchesResourceType = 
        selectedResourceType === "all" || resource.resourceTypes.includes(selectedResourceType);

      const matchesLocation = 
        selectedLocation === "all" || resource.catchmentArea === selectedLocation;

      return matchesSearch && matchesCategory && matchesResourceType && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedResourceType, selectedLocation]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedResourceType("all");
    setSelectedLocation("all");
  };

  const hasActiveFilters = 
    searchQuery !== "" || 
    selectedCategory !== "all" || 
    selectedResourceType !== "all" || 
    selectedLocation !== "all";

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Community": return <Building2 className="h-4 w-4" />;
      case "School": return <School className="h-4 w-4" />;
      case "Partnership": return <Handshake className="h-4 w-4" />;
      case "Online": return <Globe className="h-4 w-4" />;
      default: return <Building2 className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Community": return "bg-primary/10 text-primary border-primary/20";
      case "School": return "bg-secondary/10 text-secondary border-secondary/20";
      case "Partnership": return "bg-accent/10 text-accent-foreground border-accent/20";
      case "Online": return "bg-blue-accent/10 text-blue-accent border-blue-accent/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getLocationBadgeColor = (location: string) => {
    switch (location) {
      case "Local": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "State": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "National": return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "International": return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="absolute inset-0">
          <img 
            src={resourcesImage} 
            alt="Community resources" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Community Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              A searchable database of local, state, and national resources to help you find the support you need. 
              Filter by category, service type, or location to find organizations that can help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <Card className="mb-8 border-2">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="relative flex-1 w-full md:max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search resources by name, description, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex items-center gap-2">
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      <X className="h-4 w-4 mr-1" />
                      Clear Filters
                    </Button>
                  )}
                  <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                        <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                  </Collapsible>
                </div>
              </div>
            </CardHeader>
            
            <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
              <CollapsibleContent>
                <CardContent className="border-t pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              <span className="flex items-center gap-2">
                                {getCategoryIcon(category)}
                                {category}
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Service Type</label>
                      <Select value={selectedResourceType} onValueChange={setSelectedResourceType}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Service Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Service Types</SelectItem>
                          {resourceTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Location/Coverage</label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Locations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Locations</SelectItem>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>{location}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredResources.length}</span> of {communityResources.length} resources
            </p>
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedCategory}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("all")} />
                  </Badge>
                )}
                {selectedResourceType !== "all" && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedResourceType}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedResourceType("all")} />
                  </Badge>
                )}
                {selectedLocation !== "all" && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedLocation}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedLocation("all")} />
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Resource Cards Grid */}
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} getCategoryColor={getCategoryColor} getLocationBadgeColor={getLocationBadgeColor} getCategoryIcon={getCategoryIcon} />
              ))}
            </div>
          ) : (
            <Card className="py-12">
              <CardContent className="text-center">
                <div className="text-muted-foreground mb-4">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold">No resources found</h3>
                  <p className="mt-2">Try adjusting your search or filters to find what you're looking for.</p>
                </div>
                <Button variant="outline" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Help Section */}
          <Card className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="py-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Can't find what you're looking for?</h3>
              <p className="text-muted-foreground mb-4">
                Our team is here to help connect you with the right resources for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="tel:2033292929">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Our Helpline
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:211">
                    <Phone className="h-4 w-4 mr-2" />
                    Call 211 for More Resources
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

interface ResourceCardProps {
  resource: CommunityResource;
  getCategoryColor: (category: string) => string;
  getLocationBadgeColor: (location: string) => string;
  getCategoryIcon: (category: string) => React.ReactNode;
}

const ResourceCard = ({ resource, getCategoryColor, getLocationBadgeColor, getCategoryIcon }: ResourceCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="outline" className={`${getCategoryColor(resource.category)} gap-1`}>
            {getCategoryIcon(resource.category)}
            {resource.category}
          </Badge>
          <Badge className={getLocationBadgeColor(resource.catchmentArea)}>
            {resource.catchmentArea}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
          {resource.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="mb-4 line-clamp-3">
          {resource.description}
        </CardDescription>
        
        {/* Service Types */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {resource.resourceTypes.slice(0, 3).map((type) => (
            <Badge key={type} variant="secondary" className="text-xs">
              {type}
            </Badge>
          ))}
          {resource.resourceTypes.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{resource.resourceTypes.length - 3} more
            </Badge>
          )}
        </div>
        
        {/* Contact Info */}
        <div className="mt-auto space-y-2 text-sm">
          {resource.phone && (
            <a 
              href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>{resource.phone}</span>
            </a>
          )}
          {resource.address && (
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-2">{resource.address}</span>
            </div>
          )}
        </div>
        
        {/* Visit Website Button */}
        <Button asChild className="mt-4 w-full" variant="outline">
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit Website
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityResources;
