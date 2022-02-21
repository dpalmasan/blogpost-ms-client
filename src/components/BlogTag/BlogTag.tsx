import './BlogTag.css'


const BlogTag = (props: any) => {
    const { tag } = props;
    return (
        <span className="badge">
            {tag}
        </span>
    )
}

export default BlogTag;