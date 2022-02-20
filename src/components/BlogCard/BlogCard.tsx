import { BlogTag } from '../BlogTag';

import './BlogCard.css';

const BlogCard = () => {

    return (
        <div className="blog-card">
            <div className="container">
                <h4><b>John Doe</b></h4>
                <ul>
                    <li><BlogTag /></li>
                    <li><BlogTag /></li>
                    <li><BlogTag /></li>
                </ul>

            </div>
        </div>
    );
};

export default BlogCard;