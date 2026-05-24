import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import blogPosts from '../data/blogData';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 font-serif selection:bg-gray-200">
            <div className="max-w-3xl mx-auto px-6 py-24">

                {/* NAV */}
                <Link
                    to="/blog"
                    className="font-mono text-xs text-gray-400 hover:text-black underline underline-offset-4 decoration-1 decoration-gray-300"
                >
                    ← Blog
                </Link>

                {/* HEADER */}
                <header className="mt-12 mb-12">
                    <span className="font-mono text-xs text-gray-400 block mb-4">{post.date}</span>
                    <h1 className="text-3xl sm:text-4xl font-normal tracking-tight leading-tight">{post.title}</h1>
                </header>

                {/* HERO IMAGE */}
                {post.heroImage && (
                    <div className="mb-12">
                        <img
                            src={post.heroImage}
                            alt={post.title}
                            className="w-full max-w-md grayscale"
                        />
                    </div>
                )}

                {/* CONTENT */}
                <div className="space-y-6">
                    {post.content.map((block, i) => {
                        if (block.type === 'heading') {
                            return (
                                <h2
                                    key={i}
                                    className="font-serif text-lg border-b border-gray-300 pb-2 mt-10 mb-2 uppercase tracking-widest text-gray-400 text-xs"
                                >
                                    {block.text}
                                </h2>
                            );
                        }

                        if (block.type === 'code') {
                            return (
                                <pre
                                    key={i}
                                    className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto font-mono text-xs text-gray-700 leading-relaxed"
                                >
                                    <code>{block.text}</code>
                                </pre>
                            );
                        }

                        // paragraph
                        return (
                            <p
                                key={i}
                                className="font-sans text-sm text-gray-600 leading-relaxed max-w-prose"
                            >
                                {block.text}
                            </p>
                        );
                    })}
                </div>

                {/* FOOTER */}
                <div className="mt-20 pt-8 border-t border-gray-200">
                    <Link
                        to="/blog"
                        className="font-mono text-xs text-gray-400 hover:text-black underline underline-offset-4 decoration-1 decoration-gray-300"
                    >
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
