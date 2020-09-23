import React from 'react';
import './Feed.css';
//-------------------------------
import Stories from './Stories';
//-------------------------------
import MessageSender from './MessageSender';

function Feed() {
    return (
        <div className="feed" >
            <Stories />
            <MessageSender />

        </div>
    )
}

export default Feed;
