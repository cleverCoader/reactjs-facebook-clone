import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
//----------------------------------------------
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import GroupWorkRoundedIcon from '@material-ui/icons/GroupWorkRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://avatars0.githubusercontent.com/u/71284942?s=460&u=042477abf4c5020157b30e8506b311a02d37f492&v=4" title="clever developer" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information center" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={ChatIcon} title="Messages" />
            <SidebarRow Icon={StorefrontIcon} title="Market Place" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={GroupWorkRoundedIcon} title="Groups" />
            <SidebarRow Icon={FavoriteBorderRoundedIcon} title="Fundraisers" />
            <SidebarRow Icon={ExpandMoreRoundedIcon} title="See more" />

            

        </div>
    )
}

export default Sidebar;
