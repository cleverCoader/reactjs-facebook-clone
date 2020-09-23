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


            <Post
                profilePic="https://avatars0.githubusercontent.com/u/71284942?s=460&u=042477abf4c5020157b30e8506b311a02d37f492&v=4"
                message="Hii this is my build"
                timestamp="23rd sept 2020"
                username="samsan"
                image="https://wallpapercave.com/wp/wp7494287.jpg"
            />

            <Post
                profilePic="https://avatars0.githubusercontent.com/u/71284942?s=460&u=042477abf4c5020157b30e8506b311a02d37f492&v=4"
                message="Hii this is my build"
                timestamp="23rd sept 2020"
                username="samsan"
                image="https://wallpapercave.com/wp/wp1859057.jpg"
            />

            <Post
                profilePic="https://avatars0.githubusercontent.com/u/71284942?s=460&u=042477abf4c5020157b30e8506b311a02d37f492&v=4"
                message="Hii this is my build"
                timestamp="23rd sept 2020"
                username="samsan"
                image="https://wallpapercave.com/wp/wp5193539.png"
            />

            <Post
                profilePic="https://avatars0.githubusercontent.com/u/71284942?s=460&u=042477abf4c5020157b30e8506b311a02d37f492&v=4"
                message="Hii this is my build"
                timestamp="23rd sept 2020"
                username="samsan"
                image="https://wallpapercave.com/wp/wp1894272.jpg"
            />

            <Post
                profilePic="https://avatars0.githubusercontent.com/u/71284942?s=460&u=042477abf4c5020157b30e8506b311a02d37f492&v=4"
                message="Hii this is my build"
                timestamp="23rd sept 2020"
                username="samsan"
                image="https://wallpapercave.com/wp/wp1897575.jpg"
            />
            
        </div>
    )
}

export default Feed;
