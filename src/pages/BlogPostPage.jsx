import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogService } from '../services/blogService';
import '../styles/resources.css';
import SEO from '../components/SEO';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        
        const fetchPost = async () => {
            try {
                setLoading(true);
                // Lowercase the slug to match WordPress standard before fetching
                const fetchedPost = await blogService.getPostBySlug(slug.toLowerCase());
                if (fetchedPost) {
                    setPost(fetchedPost);
                } else {
                    setError('Blog post not found.');
                }
                setLoading(false);
                setTimeout(() => AOS.refresh(), 500);
            } catch (err) {
                console.error('Error loading blog post:', err);
                setError('Failed to load the blog post. Please try again later.');
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    const handleBackClick = () => {
        navigate('/resources');
    };

    const getReadTime = (content) => {
        const wordsPerMinute = 200;
        const text = content?.replace(/<[^>]*>/g, '') || "";
        const words = text.split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min read`;
    };

    if (loading) {
        return (
            <div className="resources-page pt-32 pb-24">
                <div className="flex justify-center items-center py-32">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[var(--color-hot-pink)]"></div>
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="resources-page pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="text-center py-20 text-red-500 font-bold bg-red-50 rounded-[2rem] border border-red-100 p-12">
                        <p className="text-xl mb-4">{error || 'Post not found'}</p>
                        <button onClick={handleBackClick} className="back-btn mx-auto">
                            Back to Resources
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="resources-page">
            <SEO 
                title={`${post.title} | The Starry Path`}
                description={post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160)}
            />

            <div className="blog-reader-container container mx-auto px-4 max-w-5xl" data-aos="fade-up">
                <button 
                    onClick={handleBackClick}
                    className="back-btn"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Resources
                </button>

                <h1 className="reader-title" 
                    dangerouslySetInnerHTML={{ __html: post.title }} 
                />

                <div className="reader-meta">
                    <div className="meta-item">
                        <svg className="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {post.author}
                    </div>
                    <div className="meta-item">
                        <svg className="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="meta-item">
                        <svg className="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {getReadTime(post.content)}
                    </div>
                </div>

                <div className="reader-featured-image-wrapper">
                    {post.featuredImage ? (
                        <img src={post.featuredImage} alt={post.title} />
                    ) : (
                        <div className="w-full h-96 bg-[var(--color-navy)] flex items-center justify-center text-white/20">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                            </svg>
                        </div>
                    )}
                </div>

                <div className="blog-content mx-auto"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </div>
    );
};

export default BlogPostPage;
