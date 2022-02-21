import axios from 'axios';
import { useEffect, useState } from 'react';
import { BlogCard } from '../../components/BlogCard';
import { IBlogPost } from '../../types';
import './Blogs.css';


const Blogs = () => {
    const [posts, setPosts] = useState([] as IBlogPost[]);
    useEffect(() => {
        const getPosts = async () => {
            const result = await axios.get('/posts');
            setPosts(result.data.posts)
        }

        getPosts();
    }, [])

    return (
        <div className="container">
            <h3>Blog Posts</h3>
            {posts && posts.map(post =>
                <BlogCard key={post._id} title={post.title} id={post._id} tags={post.tags} />)
            }
        </div>
    );
};

export default Blogs;