import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogData';

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-serif selection:bg-gray-200">
            <div className="max-w-3xl mx-auto px-6 py-24">

                {/* HEADER */}
                <header className="mb-20">
                    <Link to="/" className="font-mono text-xs text-gray-400 hover:text-black underline underline-offset-4 decoration-1 decoration-gray-300">
                        ← Back
                    </Link>
                    <h1 className="text-4xl font-normal mb-2 tracking-tight mt-8">Blog</h1>
                    <p className="text-gray-600 font-sans text-sm">Notes on engineering, and things I've built.</p>
                </header>

                {/* POST LIST */}
                <div className="space-y-12">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="group">
                            <Link to={`/blog/${post.slug}`} className="block">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                                    <h2 className="font-medium text-lg group-hover:underline decoration-1 underline-offset-2">
                                        {post.title}
                                    </h2>
                                    <span className="font-mono text-xs text-gray-400 shrink-0">{post.date}</span>
                                </div>
                                <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-prose">
                                    {post.excerpt}
                                </p>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
