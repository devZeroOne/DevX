import React from 'react';
import './Post.css'
import data from '../../../database/postdata.json'
import PostCard from './PostCard';


const Posts = () => {
    return (
        <div>
            <h2>Latest News</h2>
            <div className="allPosts">
                {
                    data.map(item => <PostCard item={item} />)
                }

            </div>
        </div>
    );
};

export default Posts;