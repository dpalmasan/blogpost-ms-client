import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBlogPost } from "../../types";
import Tree from 'react-d3-tree';

import './BlogDetail.css'
import { RawNodeDatum } from "react-d3-tree/lib/types/common";

const BlogDetail = () => {
    const params = useParams();
    const [blogPost, setBlogPost] = useState({} as IBlogPost);
    useEffect(() => {
        const getPosts = async () => {
            const result = await axios.get(`/posts/${params.blogId}`);
            setBlogPost(result.data)
        }

        getPosts();
    }, [])

    return (
        <div className="blog-detail">
            <span className="heading">{blogPost.title} (<em>{blogPost.metrics?.at(1)?.name}</em>: <b>{blogPost.metrics?.at(1)?.value}</b>, <em>{blogPost.metrics?.at(3)?.name}</em>: <b>{Math.round(blogPost.metrics?.at(3)?.value as number * 100) / 100}</b>)</span>
            <p>{decodeURIComponent(blogPost.body as string)}</p>
            <hr className="bar-separator" />

            <div className="row">
                <div className="side">
                    <div>{blogPost.metrics?.at(0)?.name}</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                        <div style={{ '--width': `${blogPost.metrics?.at(0)?.value as number}%` } as React.CSSProperties}>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
                <div className="side right">
                    <div>{Math.round(blogPost.metrics?.at(0)?.value as number * 100) / 100} / 100</div>
                </div>
                <div className="side">
                    <div>{blogPost.metrics?.at(2)?.name}</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                        <div style={{ '--width': `${blogPost.metrics?.at(2)?.value as number / 5 * 100}%` } as React.CSSProperties}>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
                <div className="side right">
                    <div>{Math.round(blogPost.metrics?.at(2)?.value as number * 100) / 100} / 5</div>
                </div>
            </div>
            <hr className="bar-separator" />

            <span className="heading">Sentence Analysis</span>

            {blogPost?.sentences && blogPost.sentences.map(sent =>
                <>
                    <p>Sentiment: {sent.sentiment}</p>
                    <div id="treeWrapper" style={{ width: '80em', height: '40em' }}>
                        <Tree data={sent.tree as RawNodeDatum} orientation="vertical" />
                    </div>
                </>
            )}


            <span className="heading">Metrics Explanation</span>
            <p><b>D-Estimate</b>: Measurement of Lexical Diversity cf. McKee, G., Malvern, D., & Richards, B. (2000). In a nutshell, this method
                consists on taking samples of tokens (words) and the average type token ratio for several trials for each sample size. Then, the data
                is fit to a curve in which the parameter represents the lexical diversity. More info in the paper <em>Measuring Vocabulary Diversity Using
                    Dedicated Software, Literary and Linguistic Computing</em></p>
            <p><b>Concreteness</b>: To compute this metric, the concreteness rating database from
                <a href="https://www.reilly-coglab.com/data">Temple University</a> is used. The text is split into tokens, and average concreteness
                is computed based on the lexicon ratings.</p>
        </div>
    );
};

export default BlogDetail;