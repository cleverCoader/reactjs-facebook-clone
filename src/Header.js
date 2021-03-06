import React from 'react';
import './Header.css';
//---------------------------------------
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
//----------------------------------------------------------------------------------------
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
            
                 <div className="header_input">
                    <SearchIcon />
                    <input placeholder='Search Facebook' type="text" />
                </div>
            </div>


            <div className="header_middle">
                <div className="header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisorAccountRoundedIcon fontSize="large" />
                </div>
            </div>


            <div className="header_right">
                <div className="header_info">
                    <Avatar src="https://avatars0.githubusercontent.com/u/71284942?s=460&u=042477abf4c5020157b30e8506b311a02d37f492&v=4" />
                    <h4> sam's Code</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            
        </div>
    )
}

export default Header;
