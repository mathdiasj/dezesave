export type ContentType = 'review' | 'news' | 'article';

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  type: ContentType;
  
  // Review specific
  score?: number;
  platform?: string[];
  genre?: string[];
  readingTime?: string;
  
  // Specific scores for review
  scoreDetails?: {
    historia: number;
    gameplay: number;
    graficos: number;
    trilhaSonora: number;
    ambientacao: number;
  };
}
