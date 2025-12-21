import { useQuery } from '@tanstack/react-query';
import { sanityFetch } from '@/lib/sanity';

// Blog Posts Hook
export function useBlogPosts(options?: { featured?: boolean; category?: string }) {
  return useQuery({
    queryKey: ['blogPosts', options],
    queryFn: () => {
      let query = `*[_type == "blogPost" && status == "published"`;
      
      if (options?.featured) {
        query += ` && featured == true`;
      }
      
      if (options?.category) {
        query += ` && category == "${options.category}"`;
      }
      
      query += `] | order(publishedDate desc) {
        _id,
        title,
        slug,
        excerpt,
        author->{
          name,
          image
        },
        publishedDate,
        category,
        tags,
        featuredImage,
        featured
      }`;
      
      return sanityFetch({ query });
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Single Blog Post Hook
export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () =>
      sanityFetch({
        query: `*[_type == "blogPost" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          excerpt,
          body,
          author->{
            name,
            bio,
            image
          },
          publishedDate,
          category,
          tags,
          featuredImage,
          status
        }`,
        params: { slug },
      }),
    staleTime: 5 * 60 * 1000,
    enabled: !!slug,
  });
}

// Events Hook
export function useEvents(options?: { upcoming?: boolean; featured?: boolean }) {
  return useQuery({
    queryKey: ['events', options],
    queryFn: () => {
      let query = `*[_type == "event"`;
      
      if (options?.upcoming) {
        query += ` && status == "upcoming"`;
      }
      
      if (options?.featured) {
        query += ` && featured == true`;
      }
      
      query += `] | order(date asc) {
        _id,
        title,
        slug,
        date,
        time,
        location,
        description,
        category,
        registrationLink,
        status,
        featured
      }`;
      
      return sanityFetch({ query });
    },
    staleTime: 5 * 60 * 1000,
  });
}

// Single Event Hook
export function useEvent(slug: string) {
  return useQuery({
    queryKey: ['event', slug],
    queryFn: () =>
      sanityFetch({
        query: `*[_type == "event" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          date,
          time,
          location,
          description,
          category,
          registrationLink,
          status,
          featured
        }`,
        params: { slug },
      }),
    staleTime: 5 * 60 * 1000,
    enabled: !!slug,
  });
}

// Board Members Hook
export function useBoardMembers() {
  return useQuery({
    queryKey: ['boardMembers'],
    queryFn: () =>
      sanityFetch({
        query: `*[_type == "boardMember"] | order(order asc) {
          _id,
          name,
          title,
          bio,
          photo,
          order,
          email,
          linkedIn
        }`,
      }),
    staleTime: 10 * 60 * 1000, // 10 minutes - board members don't change often
  });
}

// Job Postings Hook
export function useJobPostings(options?: { active?: boolean }) {
  return useQuery({
    queryKey: ['jobPostings', options],
    queryFn: () => {
      let query = `*[_type == "jobPosting"`;
      
      if (options?.active) {
        query += ` && status == "active"`;
      }
      
      query += `] | order(postedDate desc) {
        _id,
        title,
        slug,
        description,
        requirements,
        location,
        type,
        salary,
        status,
        postedDate,
        closingDate
      }`;
      
      return sanityFetch({ query });
    },
    staleTime: 5 * 60 * 1000,
  });
}

// Single Job Posting Hook
export function useJobPosting(slug: string) {
  return useQuery({
    queryKey: ['jobPosting', slug],
    queryFn: () =>
      sanityFetch({
        query: `*[_type == "jobPosting" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          description,
          requirements,
          location,
          type,
          salary,
          status,
          postedDate,
          closingDate,
          applicationInstructions
        }`,
        params: { slug },
      }),
    staleTime: 5 * 60 * 1000,
    enabled: !!slug,
  });
}

// FAQs Hook
export function useFAQs(category?: string) {
  return useQuery({
    queryKey: ['faqs', category],
    queryFn: () => {
      let query = `*[_type == "faq"`;
      
      if (category) {
        query += ` && category == "${category}"`;
      }
      
      query += `] | order(order asc) {
        _id,
        question,
        answer,
        category,
        order,
        grades,
        topics
      }`;
      
      return sanityFetch({ query });
    },
    staleTime: 10 * 60 * 1000,
  });
}

// KidSafe FAQ Page Hook - fetches all FAQs with grades and topics for filtering
export function useKidSafeFAQs() {
  return useQuery({
    queryKey: ['kidSafeFAQs'],
    queryFn: () =>
      sanityFetch({
        query: `*[_type == "faq" && category == "KidSafe - FAQ Page"] | order(order asc) {
          _id,
          question,
          answer,
          category,
          order,
          grades,
          topics
        }`,
      }),
    staleTime: 10 * 60 * 1000,
  });
}

// Glossary Terms Hook
export function useGlossaryTerms(category?: string) {
  return useQuery({
    queryKey: ['glossaryTerms', category],
    queryFn: () => {
      let query = `*[_type == "glossaryTerm"`;
      
      if (category) {
        query += ` && category == "${category}"`;
      }
      
      query += `] | order(term asc) {
        _id,
        term,
        definition,
        category,
        relatedTerms
      }`;
      
      return sanityFetch({ query });
    },
    staleTime: 15 * 60 * 1000, // 15 minutes - glossary terms rarely change
  });
}

// Community Resources Hook (if migrating to Sanity)
export function useCommunityResources(options?: { 
  category?: string; 
  featured?: boolean;
  active?: boolean;
}) {
  return useQuery({
    queryKey: ['communityResources', options],
    queryFn: () => {
      let query = `*[_type == "communityResource"`;
      
      if (options?.active !== false) {
        query += ` && active == true`;
      }
      
      if (options?.featured) {
        query += ` && featured == true`;
      }
      
      if (options?.category) {
        query += ` && category == "${options.category}"`;
      }
      
      query += `] | order(name asc) {
        _id,
        name,
        description,
        category,
        resourceTypes,
        catchmentArea,
        phone,
        address,
        url,
        tags,
        active,
        featured
      }`;
      
      return sanityFetch({ query });
    },
    staleTime: 5 * 60 * 1000,
  });
}

// KidSafe Grade Content Hook
export function useKidSafeGrade(ageGroup: 'elementary' | 'middle' | 'high') {
  return useQuery({
    queryKey: ['kidSafeGrade', ageGroup],
    queryFn: () =>
      sanityFetch({
        query: `*[_type == "kidSafeGrade" && ageGroup == $ageGroup] | order(order asc) {
          _id,
          grade,
          gradeLevel,
          ageGroup,
          intro,
          highlightMessage,
          topics[]->{
            _id,
            title,
            description,
            icon,
            content
          },
          resources[]->{
            _id,
            title,
            url,
            description
          },
          faqs[]->{
            _id,
            question,
            answer
          },
          order
        }`,
        params: { ageGroup },
      }),
    staleTime: 10 * 60 * 1000,
    enabled: !!ageGroup,
  });
}

// KidSafe Topics Hook
export function useKidSafeTopics() {
  return useQuery({
    queryKey: ['kidSafeTopics'],
    queryFn: () =>
      sanityFetch({
        query: `*[_type == "kidSafeTopic"] | order(order asc) {
          _id,
          title,
          description,
          icon,
          content,
          order
        }`,
      }),
    staleTime: 10 * 60 * 1000,
  });
}

// Prevention Programs Hook
export function usePreventionPrograms() {
  return useQuery({
    queryKey: ['preventionPrograms'],
    queryFn: () =>
      sanityFetch({
        query: `*[_type == "preventionProgram"] | order(order asc) {
          _id,
          title,
          description,
          targetAudience,
          duration,
          format,
          topics,
          contact,
          order
        }`,
      }),
    staleTime: 10 * 60 * 1000,
  });
}

// Authors Hook (for blog management)
export function useAuthors() {
  return useQuery({
    queryKey: ['authors'],
    queryFn: () =>
      sanityFetch({
        query: `*[_type == "author"] | order(name asc) {
          _id,
          name,
          slug,
          bio,
          image
        }`,
      }),
    staleTime: 15 * 60 * 1000,
  });
}
