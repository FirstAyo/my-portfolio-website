import { PortableTextBlock } from "@portabletext/types";

// Define a type for the featured image (e.g., from Sanity)
interface FeaturedImage {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string; // Optional alt text for the image
}

// Define a type for the content (e.g., Portable Text or string)
type Content = PortableTextBlock[] | string; // Replace `any[]` with a more specific type if possible

// Define a type for the category
interface Category {
  name: string;
  currentSlug: string;
  _id: string;
}

// Define a type for the author
interface Author {
  name: string;
  bio?: string; // Optional bio
  image?: FeaturedImage; // Optional image
}

export interface projectCards {
  title: string;
  exerpt: string;
  currentSlug: string;
  featuredImage: FeaturedImage;
  _id: string;
  category: Category[];
}

export interface projectPost {
  currentSlug: string;
  title: string;
  content: Content;
  publishedAt: string;
  featuredImage: FeaturedImage;
  category: Category[];
  author: Author[];
}

export interface category {
  name: string;
  currentSlug: string;
  _id: string;
}
