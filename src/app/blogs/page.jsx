import Image from 'next/image';
import Link from 'next/link';
import { createClient } from 'next-sanity';
import { CalendarIcon, ClockIcon, UserIcon } from 'lucide-react';
import BlogAdminButton from '../components/BlogAdminButton/BlogAdminButton';

// Initialize the Sanity client
const client = createClient({
  projectId: "lkk4d792",
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
});

// Format date for blog posts
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Fetch all blog posts with pagination and filters using GROQ
async function getBlogs(page = 1, pageSize = 9, category = null) {
  const skip = (page - 1) * pageSize;
  
  // Base query
  let query = `{
    "posts": *[_type == "post"`;
  
  // Add category filter if provided
  if (category) {
    query += ` && $category in categories[]->slug.current`;
  }
  
  // Complete the query with sorting, pagination and projections
  query += `] | order(publishedAt desc) [${skip}...${skip + pageSize}] {
      _id,
      title,
      slug,
      excerpt,
      author,
      "estimatedReadingTime": round(length(pt::text(body)) / 200),
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      "categories": *[_type == "category" && _id in ^.categories[]._ref]{
        title,
        slug,
        color
      }
    },
    "total": count(*[_type == "post"`;
  
  // Add same category filter to total count
  if (category) {
    query += ` && $category in categories[]->slug.current`;
  }
  
  // Close the query
  query += `]),
    "categories": *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      color
    }
  }`;
  
  return await client.fetch(query, { category });
}

export const metadata = {
  title: 'Blog | VR IT Solutions',
  description: 'Read our latest articles, tutorials, and insights on technology, programming, and IT solutions.',
};

export default async function BlogPage({ searchParams }) {
  const page = parseInt(searchParams?.page || '1');
  const pageSize = 9;
  const category = searchParams?.category || null;
  
  const { posts, total, categories } = await getBlogs(page, pageSize, category);
  const totalPages = Math.ceil(total / pageSize);
  
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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600">
            Latest insights, tutorials, industry trends and company updates
          </p>
        </div>
        
        {/* Categories filter */}
        {categories && categories.length > 0 && (
          <div className="max-w-5xl mx-auto mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link 
                href="/blogs"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link 
                  key={cat._id} 
                  href={`/blogs?category=${cat.slug.current}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === cat.slug.current
                      ? 'bg-primary text-white'
                      : `${getCategoryColor(cat)} opacity-80 hover:opacity-100`
                  }`}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">No blog posts found</h2>
            <p className="text-gray-600">
              {category ? `No posts available in this category.` : 'Check back soon for new content!'}
            </p>
          </div>
        ) : (
          <>
            {/* Featured post - first post gets special treatment */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image 
                      src={posts[0].mainImage?.asset.url || '/images/placeholder-blog.jpg'} 
                      alt={posts[0].mainImage?.alt || posts[0].title}
                      fill
                      className="mx-auto h-full w-auto object-contain"
                      priority
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {posts[0].categories?.map((category) => (
                          <span 
                            key={category.title} 
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}
                          >
                            {category.title}
                          </span>
                        ))}
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        <Link href={`/blogs/${posts[0].slug.current}`} className="hover:text-primary transition-colors">
                          {posts[0].title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-6">
                        {posts[0].excerpt}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        {posts[0].author && (
                          <div className="flex items-center">
                            <UserIcon size={16} className="mr-1" />
                            <span>{posts[0].author}</span>
                          </div>
                        )}
                        
                        {posts[0].publishedAt && (
                          <div className="flex items-center">
                            <CalendarIcon size={16} className="mr-1" />
                            <span>{formatDate(posts[0].publishedAt)}</span>
                          </div>
                        )}
                      </div>
                      
                      <Link 
                        href={`/blogs/${posts[0].slug.current}`}
                        className="text-primary font-medium hover:underline flex items-center"
                      >
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blog grid */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map((post) => (
                  <article 
                    key={post._id}
                    className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Link href={`/blogs/${post.slug.current}`} className="block relative h-48 overflow-hidden">
                      <Image 
                        src={post.mainImage?.asset.url || '/images/placeholder-blog.jpg'} 
                        alt={post.mainImage?.alt || post.title}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </Link>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories?.map((category) => (
                          <span 
                            key={category.title} 
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}
                          >
                            {category.title}
                          </span>
                        ))}
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        <Link href={`/blogs/${post.slug.current}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarIcon size={14} className="mr-1" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        
                        <Link 
                          href={`/blogs/${post.slug.current}`}
                          className="text-primary text-sm font-medium hover:underline"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              {page > 1 && (
                <Link
                  href={`/blogs?page=${page - 1}${category ? `&category=${category}` : ''}`}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </Link>
              )}
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blogs?page=${pageNum}${category ? `&category=${category}` : ''}`}
                  className={`px-4 py-2 border rounded-md text-sm font-medium ${
                    pageNum === page
                      ? 'bg-primary border-primary text-white'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </Link>
              ))}
              
              {page < totalPages && (
                <Link
                  href={`/blogs?page=${page + 1}${category ? `&category=${category}` : ''}`}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Next
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
      <BlogAdminButton />
    </div>
  );
}