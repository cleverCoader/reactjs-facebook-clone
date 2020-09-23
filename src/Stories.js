import React from 'react';
import './Stories.css';

import Story from './Story';

function Stories() {
    return (
        <div className="stories">
            <Story
                image="https://wallpapercave.com/wp/wp1894272.jpg"
                profileSrc="https://wallpapercave.com/wp/wp1894272.jpg"
                title="A B Devilliars"
            />
            <Story
                image="https://wallpapercave.com/wp/wp1897575.jpg"
                profileSrc="https://wallpapercave.com/wp/wp1897575.jpg"
                title="A B Devilliars"
            />
            <Story
                image="https://wallpapercave.com/wp/wp7494287.jpg"
                profileSrc="https://wallpapercave.com/wp/wp7494287.jpg"
                title="Tony Stark"
            />
            <Story
                image="https://wallpapercave.com/wp/wp1891370.jpg"
                profileSrc="https://wallpapercave.com/wp/wp1891370.jpg"
                title="Hawkeye"
            />
            <Story
                image="https://wallpapercave.com/wp/wp1859057.jpg"
                profileSrc="https://wallpapercave.com/wp/wp1859057.jpg"
                title="M S Dhoni"
            />
            <Story
                image="https://wallpapercave.com/wp/wp5193539.png"
                profileSrc="https://wallpapercave.com/wp/wp5193539.png"
                title="Rohit sharma"
            />
            
        </div>
    )
}

export default Stories;
