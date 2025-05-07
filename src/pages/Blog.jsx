import React from 'react';
import { useEffect } from 'react';

const Blog = () => {

  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Stay updated with the latest news and stories from our university community.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/blog.jpg"
                alt="Blog Post 1"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Blog Post Title 1</h3>
              <p className="text-gray-500 mb-2">Posted on January 1, 2023</p>
              <p className="text-gray-700 mb-4">
                This is a brief excerpt of the blog post. It provides a summary of the content and encourages readers to click through to read more.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>

            {/* Blog Post 2 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/blog.jpg"
                alt="Blog Post 2"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Blog Post Title 2</h3>
              <p className="text-gray-500 mb-2">Posted on February 15, 2023</p>
              <p className="text-gray-700 mb-4">
                This is another blog post excerpt. It gives a quick overview of the topic and invites readers to explore further.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>

            {/* Blog Post 3 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/blog.jpg"
                alt="Blog Post 3"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Blog Post Title 3</h3>
              <p className="text-gray-500 mb-2">Posted on March 10, 2023</p>
              <p className="text-gray-700 mb-4">
                This blog post covers an interesting topic related to university life, academics, or events. Click to read more.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>

            {/* Blog Post 4 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/blog.jpg"
                alt="Blog Post 4"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Blog Post Title 4</h3>
              <p className="text-gray-500 mb-2">Posted on April 5, 2023</p>
              <p className="text-gray-700 mb-4">
                This post provides insights into a specific aspect of university life. Read more to learn about it.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>

            {/* Blog Post 5 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/blog.jpg"
                alt="Blog Post 5"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Blog Post Title 5</h3>
              <p className="text-gray-500 mb-2">Posted on May 20, 2023</p>
              <p className="text-gray-700 mb-4">
                This blog post discusses recent events or achievements at the university. Click to read the full story.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>

            {/* Blog Post 6 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/blog.jpg"
                alt="Blog Post 6"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Blog Post Title 6</h3>
              <p className="text-gray-500 mb-2">Posted on June 1, 2023</p>
              <p className="text-gray-700 mb-4">
                This post highlights student stories, faculty research, or community engagement. Read more to learn about it.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
