import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeft } from 'lucide-react';
import { createClient } from 'next-sanity';

// Initialize the Sanity client
const client = createClient({
    projectId: "lkk4d792",
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true,
  });

// Format date for blog posts
const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Get estimated reading time
const getReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text?.split(/\s+/).length || 0;
  return Math.ceil(words / wordsPerMinute);
};

// Fetch a single blog post using GROQ
async function getBlogPost(slug) {
  // GROQ query to get blog post data
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    author,
    publishedAt,
    updatedAt,
    body,
    "estimatedReadingTime": round(length(pt::text(body)) / 200),
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    "categories": *[_type == "category" && _id in ^.categories[]._ref]{
      _id,
      title,
      slug,
      color
    },
    "tags": tags,
    "relatedPosts": *[_type == "post" && slug.current != $slug && count(categories[_ref in ^.categories[]._ref]) > 0][0...3]{
      _id,
      title,
      slug,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      }
    }
  }`;
  
  return await client.fetch(query, { slug });
}

// Components for rendering rich text with PortableText
const portableTextComponents = {
  types: {
    image: ({ value }) => {
        // Check if we have an asset with a URL
        if (!value?.asset?._ref && !value?.asset?.url) {
          return null;
        }
  
        // Get the URL - handle both formats that might come from Sanity
        const imageUrl = value.asset.url || 
          `https://cdn.sanity.io/images/lkk4d792/production/${value.asset._ref
            .replace('image-', '')
            .replace('-jpg', '.jpg')
            .replace('-png', '.png')
            .replace('-webp', '.webp')
            .replace('-gif', '.gif')
            .replace('-svg', '.svg')}`;
  
        return (
          <div className="my-8 relative">
            <Image 
              src={imageUrl}
              alt={value.alt || 'Blog image'} 
              width={800}
              height={500}
              className="rounded-lg mx-auto object-cover"
            />
          </div>
        );
      },
    code: ({ value }) => {
      return (
        <div className="bg-gray-900 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            {value.code}
          </pre>
          {value.filename && (
            <div className="text-xs text-gray-400 mt-2 font-mono">
              {value.filename}
            </div>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold my-8 text-gray-900">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-gray-900">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg md:text-xl font-bold mt-6 mb-2 text-gray-900">{children}</h4>,
    normal: ({ children }) => <p className="text-gray-700 my-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-gray-800 p-1 rounded font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = value?.href?.startsWith('/') ? undefined : '_blank';
      const rel = value?.href?.startsWith('/') ? undefined : 'noopener noreferrer';
      return (
        <a 
          href={value.href}
          target={target}
          rel={rel}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-gray-700">{children}</li>,
    number: ({ children }) => <li className="text-gray-700">{children}</li>,
  },
};

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  // Extract slug from URL parameters
  const slug = params.slug[params.slug.length - 1];
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.mainImage?.asset?.url || '/images/placeholder-blog.jpg'],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPost({ params }) {
  // Extract slug from URL parameters
  const slug = params.slug[params.slug.length - 1];
  const post = await getBlogPost(slug);
  
  if (!post) {
    notFound();
  }
  
  // Get category colors for styling
  const getCategoryColor = (category) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      red: 'bg-red-100 text-red-800',
      orange: 'bg-orange-100 text-orange-800',
      purple: 'bg-purple-100 text-purple-800',
      pink: 'bg-pink-100 text-pink-800',
      teal: 'bg-teal-100 text-teal-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      gray: 'bg-gray-100 text-gray-800',
    };
    return colorMap[category.color] || 'bg-primary/10 text-primary';
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back to blogs link */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link href="/blogs" className="text-gray-600 hover:text-primary flex items-center text-sm">
            <ArrowLeft size={16} className="mr-1" />
            Back to all blogs
          </Link>
        </div>
        
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Featured image */}
          {post.mainImage && post.mainImage.asset && (
            <div className="relative h-64 md:h-96 w-full">
              <Image 
                src={post.mainImage.asset.url} 
                alt={post.mainImage.alt || post.title} 
                fill
                className="object-cover" 
                priority
              />
            </div>
          )}
          
          <div className="p-6 md:p-10">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <span 
                    key={category._id}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            {/* Meta information */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 gap-4 md:gap-6">
              {post.author && (
                <div className="flex items-center">
                  <UserIcon size={16} className="mr-1" />
                  <span>{post.author}</span>
                </div>
              )}
              
              {post.publishedAt && (
                <div className="flex items-center">
                  <CalendarIcon size={16} className="mr-1" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
              )}
              
              {post.estimatedReadingTime && (
                <div className="flex items-center">
                  <ClockIcon size={16} className="mr-1" />
                  <span>{post.estimatedReadingTime} min read</span>
                </div>
              )}
            </div>
            
            {/* Blog content */}
            <div className="prose prose-lg max-w-none">
              <PortableText 
                value={post.body} 
                components={portableTextComponents}
              />
            </div>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-gray-100">
                <h2 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h2>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
        
        {/* Related posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost._id} 
                  href={`/blogs/${relatedPost.slug.current}`}
                  className="bg-white rounded-lg shadow overflow-hidden hover:-translate-y-1 transition-transform group"
                >
                  <div className="relative h-48">
                    <Image 
                      src={relatedPost.mainImage?.asset.url || '/images/placeholder-blog.jpg'} 
                      alt={relatedPost.title} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {formatDate(relatedPost.publishedAt)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}