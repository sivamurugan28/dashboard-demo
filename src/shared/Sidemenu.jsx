import React from 'react';
import layout from "../assets/dashboard/side-menu/layout.svg";
import sideMenu2 from "../assets/dashboard/side-menu/side-menu-2.svg";
import sideMenu3 from "../assets/dashboard/side-menu/side-menu-3.svg";
import sideMenu4 from "../assets/dashboard/side-menu/side-menu-4.svg";
import sideMenu5 from "../assets/dashboard/side-menu/side-menu-5.svg";
import sideMenu6 from "../assets/dashboard/side-menu/side-menu-6.svg";
import sideMenu7 from "../assets/dashboard/side-menu/side-menu-7.svg";
import sideMenu8 from "../assets/dashboard/side-menu/side-menu-8.svg";
import sideMenu9 from "../assets/dashboard/side-menu/side-menu-9.svg";
import sideMenuStyle from "../styles/sideMenu.module.scss";


export default function Sidemenu() {
    return (
        <div className={sideMenuStyle.dashboardSideMenu}>
            <ul>
                <li>
                    <img src={layout} className={sideMenuStyle.navIcon} />
                </li>
                <li>
                    <img src={sideMenu2} className={sideMenuStyle.navIcon} />
                </li>
                <li>
                    <img src={sideMenu3} className={sideMenuStyle.navIcon} />
                </li>
                <li>
                    <img src={sideMenu4} className={sideMenuStyle.navIcon} />
                </li>
                <li>
                    <img src={sideMenu5} className={sideMenuStyle.navIcon} />
                </li>
                <li>
                    <img src={sideMenu6} className={sideMenuStyle.navIcon} />
                </li>
                <li>
                    <img src={sideMenu7} className={sideMenuStyle.navIcon} />
                </li>
                <li>
                    <img src={sideMenu8} className={sideMenuStyle.navIcon} />
                </li>
                <li>
                    <img src={sideMenu9} className={sideMenuStyle.navIcon} />
                </li>
            </ul>
        </div>
    )
}
