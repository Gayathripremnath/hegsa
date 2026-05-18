import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      category: 'Construction',
      title: 'Modern Construction Techniques in UAE',
      excerpt: 'Discover the latest construction methodologies being implemented across Dubai and UAE. From sustainable building practices to innovative materials, learn how the industry is evolving.',
      date: 'Jan 15, 2024',
      author: 'HEGSA Team',
      icon: 'fas fa-building'
    },
    {
      category: 'Maintenance',
      title: 'Essential Building Maintenance Tips',
      excerpt: 'Regular maintenance is crucial for preserving the value and functionality of your property. Learn the key maintenance practices that every building owner should know.',
      date: 'Jan 10, 2024',
      author: 'HEGSA Team',
      icon: 'fas fa-tools'
    },
    {
      category: 'Design',
      title: 'Interior Design Trends 2024',
      excerpt: 'Explore the hottest interior design trends shaping homes and offices in 2024. From minimalist aesthetics to bold color choices, find inspiration for your next project.',
      date: 'Jan 05, 2024',
      author: 'HEGSA Team',
      icon: 'fas fa-paint-brush'
    },
    {
      category: 'Safety',
      title: 'Workplace Safety in Construction',
      excerpt: 'Safety is our top priority. Learn about the comprehensive safety measures and protocols we implement to ensure a secure working environment for all our projects.',
      date: 'Dec 28, 2023',
      author: 'HEGSA Team',
      icon: 'fas fa-hard-hat'
    },
    {
      category: 'Technology',
      title: 'Smart Building Solutions',
      excerpt: 'The future of construction is smart. Discover how IoT and automation are transforming buildings into intelligent, energy-efficient spaces that enhance comfort and reduce costs.',
      date: 'Dec 20, 2023',
      author: 'HEGSA Team',
      icon: 'fas fa-microchip'
    },
    {
      category: 'Sustainability',
      title: 'Green Building Practices',
      excerpt: 'Sustainability is no longer optional. Learn about eco-friendly construction practices, renewable materials, and energy-efficient solutions that benefit both the environment and your budget.',
      date: 'Dec 15, 2023',
      author: 'HEGSA Team',
      icon: 'fas fa-leaf'
    }
  ];

  return (
    <div className="blog-container">
      <section className="blog-hero">
        <h1>Hegsa Blog</h1>
        <p>Insights, updates, and expert advice from the construction industry</p>
      </section>

      <section className="blog-content">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article className="blog-card" key={index}>
              <div className="blog-image">
                <i className={post.icon}></i>
                <span className="blog-date">{post.date}</span>
              </div>
              <div className="blog-body">
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span><i className="fas fa-user"></i>{post.author}</span>
                  <span><i className="fas fa-comment"></i>0 Comments</span>
                </div>
                <button className="blog-btn">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-cta">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates and insights delivered to your inbox</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Blog;
