import { client } from '@/lib/sanity.client';
import imageUrlBuilder from '@sanity/image-url';

// Create a builder to get image URLs
const builder = imageUrlBuilder(client);

// Function to generate image URLs from Sanity image references
export function urlForImage(source) {
  if (!source || !source.asset) {
    return {
      url: 'https://via.placeholder.com/800x600?text=Image+Not+Available',
    };
  }
  
  return builder.image(source);
}