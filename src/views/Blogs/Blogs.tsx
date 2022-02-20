import { BlogCard } from '../../components/BlogCard';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container">
            <h3>Blog Posts</h3>
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    );
};

export default Blogs;