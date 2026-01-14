// Service for managing blog posts from local JSON data
import postsData from '../data/posts.json';

class PostsService {
  /**
   * Get all published posts
   * @returns {Promise<Array>} Array of published posts
   */
  async getAllPosts() {
    try {
      // Filter only published posts and sort by creation date (newest first)
      const publishedPosts = postsData.posts
        .filter(post => post.published)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      return publishedPosts.map(post => this.formatPost(post));
    } catch (error) {
      console.error('Error loading posts:', error);
      return [];
    }
  }

  /**
   * Get a specific post by slug
   * @param {string} slug - The post slug
   * @returns {Promise<Object|null>} Post object or null if not found
   */
  async getPostBySlug(slug) {
    try {
      const post = postsData.posts.find(p => p.slug === slug && p.published);
      return post ? this.formatPost(post) : null;
    } catch (error) {
      console.error('Error loading post:', error);
      return null;
    }
  }

  /**
   * Get posts by category
   * @param {string} category - The category to filter by
   * @returns {Promise<Array>} Array of posts in the category
   */
  async getPostsByCategory(category) {
    try {
      const categoryPosts = postsData.posts
        .filter(post => post.published && post.category === category)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      return categoryPosts.map(post => this.formatPost(post));
    } catch (error) {
      console.error('Error loading category posts:', error);
      return [];
    }
  }

  /**
   * Get all unique categories
   * @returns {Promise<Array>} Array of unique categories
   */
  async getCategories() {
    try {
      const categories = [...new Set(
        postsData.posts
          .filter(post => post.published)
          .map(post => post.category)
      )];
      
      return categories.sort();
    } catch (error) {
      console.error('Error loading categories:', error);
      return [];
    }
  }

  /**
   * Get all unique tags
   * @returns {Promise<Array>} Array of unique tags
   */
  async getTags() {
    try {
      const allTags = postsData.posts
        .filter(post => post.published)
        .flatMap(post => post.tags || []);
      
      const uniqueTags = [...new Set(allTags)];
      return uniqueTags.sort();
    } catch (error) {
      console.error('Error loading tags:', error);
      return [];
    }
  }

  /**
   * Search posts by title or content
   * @param {string} query - Search query
   * @returns {Promise<Array>} Array of matching posts
   */
  async searchPosts(query) {
    try {
      if (!query || query.trim().length < 2) {
        return [];
      }

      const searchQuery = query.toLowerCase().trim();
      const matchingPosts = postsData.posts
        .filter(post => {
          if (!post.published) return false;
          
          const titleMatch = post.title.toLowerCase().includes(searchQuery);
          const contentMatch = post.content.toLowerCase().includes(searchQuery);
          const excerptMatch = post.excerpt?.toLowerCase().includes(searchQuery);
          const tagMatch = post.tags?.some(tag => tag.toLowerCase().includes(searchQuery));
          
          return titleMatch || contentMatch || excerptMatch || tagMatch;
        })
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      return matchingPosts.map(post => this.formatPost(post));
    } catch (error) {
      console.error('Error searching posts:', error);
      return [];
    }
  }

  /**
   * Format post data for consistent output
   * @param {Object} post - Raw post data
   * @returns {Object} Formatted post
   */
  formatPost(post) {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || this.generateExcerpt(post.content),
      category: post.category,
      subcategory: post.subcategory,
      tags: post.tags || [],
      slug: post.slug,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      images: post.images || [],
      // Generate a reading time estimate
      readingTime: this.estimateReadingTime(post.content),
      // Format date for display
      formattedDate: this.formatDate(post.createdAt)
    };
  }

  /**
   * Generate excerpt from content if not provided
   * @param {string} content - Post content
   * @returns {string} Generated excerpt
   */
  generateExcerpt(content) {
    if (!content) return '';
    
    // Strip HTML tags and get first 150 characters
    const plainText = content.replace(/<[^>]*>/g, '');
    return plainText.length > 150 
      ? plainText.substring(0, 150).trim() + '...'
      : plainText;
  }

  /**
   * Estimate reading time based on content length
   * @param {string} content - Post content
   * @returns {number} Estimated reading time in minutes
   */
  estimateReadingTime(content) {
    if (!content) return 0;
    
    const wordsPerMinute = 200;
    const plainText = content.replace(/<[^>]*>/g, '');
    const wordCount = plainText.split(/\s+/).length;
    
    return Math.ceil(wordCount / wordsPerMinute);
  }

  /**
   * Format date for display
   * @param {string} dateString - ISO date string
   * @returns {string} Formatted date
   */
  formatDate(dateString) {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Invalid Date';
    }
  }

  /**
   * Get recent posts (last 5)
   * @returns {Promise<Array>} Array of recent posts
   */
  async getRecentPosts(limit = 5) {
    try {
      const allPosts = await this.getAllPosts();
      return allPosts.slice(0, limit);
    } catch (error) {
      console.error('Error loading recent posts:', error);
      return [];
    }
  }

  /**
   * Get posts count by category
   * @returns {Promise<Object>} Object with category counts
   */
  async getCategoryCounts() {
    try {
      const posts = postsData.posts.filter(post => post.published);
      const counts = {};
      
      posts.forEach(post => {
        counts[post.category] = (counts[post.category] || 0) + 1;
      });
      
      return counts;
    } catch (error) {
      console.error('Error loading category counts:', error);
      return {};
    }
  }
}

export default new PostsService();
