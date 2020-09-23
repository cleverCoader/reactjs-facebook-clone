import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import './MessageSender.css';

import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
        setImageUrl("");
    }


    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form className="form_control" >
                    <input
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        className="messageSender_input"
                        placeholder="What's on your mind, sam"
                    />
                    <input 
                        value={imageUrl}
                        onChange={(e)=>setImageUrl(e.target.value)}
                        placeholder="image URL/Video"
                        
                    />

                    <button onClick={handleSubmit} type="submit">Button</button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <OndemandVideoIcon style={{color:"red"}} />
                    <h3> Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color:"darkgreen"}} />
                    <h3> Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3> Feeling/Activity</h3>
                </div>
                
            </div>

        </div>
    )
}

export default MessageSender;
