export type Category = "news" | "sports" | "entertainment" | "health" | "technology";

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  category: Category;
  author: string;
  authorAvatar: string;
  publishedAt: string;
  readTime: number;
  views: number;
  likes: number;
  comments: number;
  isSponsored?: boolean;
  isTrending?: boolean;
}

export interface Comment {
  id: string;
  articleId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  createdAt: string;
  likes: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bookmarks: string[];
  followedCategories: Category[];
}

export const CATEGORIES: { name: string; slug: Category; color: string }[] = [
  { name: "News", slug: "news", color: "badge-news" },
  { name: "Sports", slug: "sports", color: "badge-sports" },
  { name: "Entertainment", slug: "entertainment", color: "badge-entertainment" },
  { name: "Health", slug: "health", color: "badge-health" },
  { name: "Technology", slug: "technology", color: "badge-technology" },
];
