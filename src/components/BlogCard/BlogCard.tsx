import { Link } from 'react-router-dom';
import { BlogTag } from '../BlogTag';

import './BlogCard.css';

const BlogCard = (props: any) => {
    const { title, id, tags } = props;
    return (
        <div className="blog-card">
            <div className="container">
                <h4><Link key={id} to={`/blogs/${id}`}>{title}</Link></h4>
                <ul>
                    {tags && tags.map((item: string) => (
                        <li key={`${id}${item}`}>
                            <BlogTag tag={item} />
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default BlogCard;