import React from 'react';
import './Feed.css';
//-------------------------------
import Stories from './Stories';
//-------------------------------
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed" >
            <Stories />
            <MessageSender />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed;
