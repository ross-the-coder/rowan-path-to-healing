import author from './author'
import blogPost from './blogPost'
import event from './event'
import jobPosting from './jobPosting'
import boardMember from './boardMember'
import communityResource from './communityResource'
import faq from './faq'
import glossaryTerm from './glossaryTerm'
import preventionProgram from './preventionProgram'
import resourceLink from './resourceLink'
import kidSafeGrade from './kidSafeGrade'
import kidSafeTopic from './kidSafeTopic'
import newsArticle from './newsArticle'

export const schemaTypes = [
  // Blog & Content
  author,
  blogPost,
  event,
  newsArticle,
  
  // Organization
  jobPosting,
  boardMember,
  
  // Resources
  communityResource,
  resourceLink,
  faq,
  glossaryTerm,
  
  // Programs
  preventionProgram,
  
  // KidSafe Content
  kidSafeGrade,
  kidSafeTopic,
]
