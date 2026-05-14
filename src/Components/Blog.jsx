import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    title: 'Modern Trends in Aluminium Glass Facades',
    date: 'May 12, 2026',
    author: 'Hegsa Editorial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    excerpt: 'Exploring how curtain wall systems are revolutionizing modern architecture in the UAE...'
  },
  {
    title: 'Benefits of Energy-Efficient Skylights',
    date: 'May 05, 2026',
    author: 'Engineering Team',
    image: 'https://images.unsplash.com/photo-1518005020480-cf957014b907?q=80&w=1974',
    excerpt: 'How natural light can reduce your energy costs and improve indoor well-being...'
  },
  {
    title: 'Maintaining Your Joinery: Tips for Longevity',
    date: 'April 28, 2026',
    author: 'Carpentry Experts',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069',
    excerpt: 'Professional advice on keeping your custom wooden furniture and doors in top condition...'
  },
  {
    title: 'Choosing the Right Polish for Your Woodwork',
    date: 'April 20, 2026',
    author: 'Polishing Dept',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
    excerpt: 'Comparing PU, Melamine, and NC finishes for different residential and commercial needs...'
  },
  {
    title: 'Hegsa Projects: A Look at Recent Deliveries',
    date: 'April 15, 2026',
    author: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
    excerpt: 'Showcasing our recent work for major clients across Dubai and Abu Dhabi...'
  },
  {
    title: 'Safety Standards in Modern Construction',
    date: 'April 10, 2026',
    author: 'HSE Officer',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070',
    excerpt: 'Our commitment to the highest health and safety standards on every job site...'
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <h1>Hegsa Blog</h1>
          <p className="subtitle">Latest News, Trends & Insights from the Construction World</p>
        </div>
      </section>

      <section className="blog-content-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-item">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-date">
                    <span>{post.date.split(' ')[1].replace(',', '')}</span>
                    <small>{post.date.split(' ')[0]}</small>
                  </div>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span><i className="fa-regular fa-user"></i> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="read-more">READ MORE <i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
