import React from 'react';
import posts from '../data/posts.json';
import { Link } from 'react-router-dom';

function BlogPostsPage() {

    const blogPosts = posts.map( (post) =>
        <section key={post.id}>
            <Link to={() => "/blogposts/" + post.id}>{post.title}</Link>
            <br />
        </section>
    )

    return (
        <>
            <h1>Blogs</h1>
            {blogPosts}
        </>
    )
}

export default BlogPostsPage;