import { kidSafeResourcesData, ResourceLink, AgeGroupResources } from "@/data/kidSafeResourcesData";
import { resourceKeywords, topicToAgeGroup } from "@/data/resourceKeywordsData";

export interface MatchedResource extends ResourceLink {
  ageGroup: "elementary" | "middle" | "high";
  category: string;
  relevanceScore: number;
}

/**
 * Searches resources based on a query string, returning matched resources sorted by relevance
 */
export function searchResources(query: string): MatchedResource[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery || normalizedQuery.length < 2) {
    return [];
  }

  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 2);
  const matchedResources: MatchedResource[] = [];

  // First, find matching topics from keywords
  const matchedTopics = new Set<string>();
  for (const mapping of resourceKeywords) {
    if (mapping.keyword.includes(normalizedQuery) || normalizedQuery.includes(mapping.keyword)) {
      mapping.topics.forEach(topic => matchedTopics.add(topic.toLowerCase()));
    }
  }

  // Search through all resources
  for (const ageGroup of kidSafeResourcesData) {
    for (const category of ageGroup.resources) {
      for (const resource of category.links) {
        let relevanceScore = 0;

        // Check title match
        const titleLower = resource.title.toLowerCase();
        if (titleLower.includes(normalizedQuery)) {
          relevanceScore += 10;
        } else {
          for (const word of queryWords) {
            if (titleLower.includes(word)) {
              relevanceScore += 3;
            }
          }
        }

        // Check description match
        if (resource.description) {
          const descLower = resource.description.toLowerCase();
          if (descLower.includes(normalizedQuery)) {
            relevanceScore += 5;
          } else {
            for (const word of queryWords) {
              if (descLower.includes(word)) {
                relevanceScore += 2;
              }
            }
          }
        }

        // Check keyword match
        for (const keyword of resource.keywords) {
          const keywordLower = keyword.toLowerCase();
          if (keywordLower.includes(normalizedQuery) || normalizedQuery.includes(keywordLower)) {
            relevanceScore += 4;
          } else {
            for (const word of queryWords) {
              if (keywordLower.includes(word)) {
                relevanceScore += 2;
              }
            }
          }
        }

        // Check category match
        if (category.category.toLowerCase().includes(normalizedQuery)) {
          relevanceScore += 6;
        }

        // Boost if category matches a topic from keywords
        if (matchedTopics.has(category.category.toLowerCase())) {
          relevanceScore += 3;
        }

        if (relevanceScore > 0) {
          matchedResources.push({
            ...resource,
            ageGroup: ageGroup.key,
            category: category.category,
            relevanceScore
          });
        }
      }
    }
  }

  // Sort by relevance and deduplicate by title
  const seen = new Set<string>();
  return matchedResources
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .filter(r => {
      if (seen.has(r.title)) return false;
      seen.add(r.title);
      return true;
    })
    .slice(0, 8); // Return top 8 matches
}

/**
 * Get age group label
 */
export function getAgeGroupLabel(key: "elementary" | "middle" | "high"): string {
  const labels = {
    elementary: "Elementary (K-5)",
    middle: "Middle School (6-8)", 
    high: "High School (9-12)"
  };
  return labels[key];
}
