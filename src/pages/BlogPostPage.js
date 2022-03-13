import React from 'react';
import posts from '../data/posts.json';
import {Link, useParams} from "react-router-dom";


function BlogPostPage( {} ) {
    const {id} = useParams();
    const blog = posts.find( (post) => post.id === id);

    return (
        <section key={blog.id}>
            <h1>{blog.title}</h1>
            <h4>{blog.date}</h4>
            <p>{blog.content}</p>
            <Link to="/blogposts">Ga terug</Link>
        </section>
    )
}

export default BlogPostPage;