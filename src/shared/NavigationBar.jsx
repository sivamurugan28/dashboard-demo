import React from 'react'
import navigationStyle from "../styles/navigation.module.scss";
import logo from "../assets/dashboard/logo.png";
import searchIcon from "../assets/dashboard/searchIcon.png";
import chatIcon from "../assets/dashboard/chat.png";
import dayMode from "../assets/dashboard/day-mode.png";
import notification from "../assets/dashboard/notification.png";
import userProfile from "../assets/dashboard/user-1.png";
import settings from "../assets/dashboard/settings.png";





export default function NavigationBar() {
    return (
        <div className={navigationStyle.mainContainer}>
            <div className={navigationStyle.logoContainer}>
                <img src={logo} className={navigationStyle.brandLogo} />
                <div className={navigationStyle.searchBar}>
                    <input placeholder='Search' />
                    <img src={searchIcon} />
                </div>
            </div>

            <div className={navigationStyle.navMenuContainer}>
                <ul>
                    <li>
                        <img src={dayMode} className={navigationStyle.navIcon} />
                    </li>
                    <li>
                        <img src={chatIcon} className={navigationStyle.navIcon} />
                    </li>
                    <li>
                        <img src={notification} className={navigationStyle.navIcon} />
                    </li>
                    <li>
                        <img src={settings} className={navigationStyle.navIcon} />
                    </li>
                    <li>
                        <img src={userProfile} className={navigationStyle.navIcon} />
                    </li>
                </ul>

            </div>

        </div>
    )
}
