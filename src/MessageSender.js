import { Avatar } from '@material-ui/core';
import React from 'react';
import './MessageSender.css';

function MessageSender() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input />
                    <input />
                    <button onClick={handleSubmit} type="submit">Button</button>
                </form>
            </div>
            <div className="messageSender_bottom">

            </div>

        </div>
    )
}

export default MessageSender;
