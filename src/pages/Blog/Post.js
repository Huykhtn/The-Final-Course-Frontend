import React from 'react'
import stylearticle from './Blog.module.css';
const Post = ({ post }) => {
    return (
        <article className={stylearticle.article}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>
        </article>
    )
}
export default Post