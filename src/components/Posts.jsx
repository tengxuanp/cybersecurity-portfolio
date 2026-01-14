import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CSDNApiService } from '../services/csdnService';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataSource, setDataSource] = useState('unknown');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch posts from CSDN RSS service
        const response = await CSDNApiService.getPosts(8);
        if (response.success) {
          setPosts(response.posts);
          setDataSource(response.source);
        } else {
          throw new Error('Failed to fetch posts');
        }
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts. Please try again later.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter posts by search term
  const filteredPosts = posts.filter(post => {
    if (searchTerm === '') return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.description.toLowerCase().includes(searchLower) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const getTagColor = (tag) => {
    const colors = {
      'HackTheBox': 'bg-green-600',
      'Writeup': 'bg-blue-600',
      'XSS': 'bg-red-600',
      'LFI': 'bg-purple-600',
      'RCE': 'bg-orange-600',
      'Apache Tomcat': 'bg-yellow-600',
      'KeePass': 'bg-pink-600',
      'Memory Dump': 'bg-indigo-600',
      'SSH': 'bg-teal-600',
      'Finger': 'bg-cyan-600',
      'FreeBSD': 'bg-lime-600',
      'VNC': 'bg-emerald-600',
      'Port Forwarding': 'bg-violet-600',
      'Privilege Escalation': 'bg-sky-600',
      'CVE': 'bg-red-500',
      'File Upload': 'bg-amber-600',
      'Penetration Testing': 'bg-slate-600',
      'Vulnerability Analysis': 'bg-rose-600'
    };
    return colors[tag] || 'bg-gray-600';
  };

  if (loading) {
    return (
      <div name='posts' className='w-full min-h-screen bg-white py-16'>
        <div className='max-w-[1200px] mx-auto p-4'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold text-black mb-8'>Blog Posts</h2>
            <div className='flex justify-center'>
              <div className='w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
            </div>
            <p className='text-gray-600 mt-4'>Loading posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div name='posts' className='w-full min-h-screen bg-white py-16'>
        <div className='max-w-[1200px] mx-auto p-4'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold text-black mb-8'>Blog Posts</h2>
            <div className='bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto'>
              <p className='text-red-600 mb-4'>{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors'
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div name='posts' className='w-full min-h-screen bg-white py-16'>
      <div className='max-w-[1200px] mx-auto p-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-black mb-4'>Blog Posts</h2>
          <p className='text-gray-600 max-w-[600px] mx-auto mb-8'>
            Latest technical writeups and cybersecurity insights from my CSDN blog, 
            featuring HackTheBox walkthroughs, vulnerability analysis, and penetration testing techniques.
          </p>
          
          {/* Search Bar */}
          <div className='flex justify-center mb-8'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search posts...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64'
              />
              <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Stats */}
        <div className='text-center mb-8'>
          <p className='text-gray-600'>
            Showing {filteredPosts.length} of {posts.length} posts
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* No Posts Message */}
        {filteredPosts.length === 0 ? (
          <div className='text-center py-12'>
            <div className='text-gray-400 mb-4'>
              <svg className='w-16 h-16 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-gray-700 mb-2'>No posts found</h3>
            <p className='text-gray-500'>Try adjusting your search term.</p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className='mt-4 text-blue-600 hover:text-blue-800 font-medium'
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          /* Posts Grid */
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredPosts.map((post, index) => (
              <motion.article 
                key={post.guid || post.link || index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group'
              >
                <div className='p-6'>
                  {/* Title */}
                  <h3 className='text-lg font-semibold text-black mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors'>
                    <a 
                      href={post.link} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='hover:underline'
                    >
                      {post.title}
                    </a>
                  </h3>
                  
                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-3'>
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-2 py-1 text-xs text-white rounded ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className='text-gray-700 text-sm mb-4 line-clamp-3'>
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className='flex justify-between items-center text-xs text-gray-500'>
                    <span>{formatDate(post.pubDate)}</span>
                    <a 
                      href={post.link} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800 font-medium'
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className='text-center mt-12'>
          <div className='mb-4'>
            <span className={`text-xs px-2 py-1 rounded ${dataSource === 'rss' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {dataSource === 'rss' ? '📡 Live from CSDN RSS Feed' : '📚 Cached Content (RSS Unavailable)'}
            </span>
          </div>
          <div className='flex justify-center space-x-4'>
            <a 
              href='https://blog.csdn.net/rafaelroot' 
              target='_blank' 
              rel='noopener noreferrer'
              className='inline-flex items-center px-6 py-3 bg-[#fc5531] text-white font-medium rounded-lg hover:bg-[#e04622] transition-colors duration-300'
            >
              <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/>
              </svg>
              Visit My CSDN Blog
            </a>
            <a 
              href='https://github.com/rafaelroot'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300'
            >
              <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
