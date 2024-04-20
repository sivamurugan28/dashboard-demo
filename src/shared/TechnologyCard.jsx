import React from 'react';
import technologyCardStyle from "../styles/technology-card.module.scss";
import filterIcon from "../assets/dashboard/side-menu/python-icon.svg";
import threeDotMore from "../assets/dashboard/side-menu/threeDotMore.svg";

export default function TechnologyCard() {
    return (
        <div className={technologyCardStyle.mainContainer}>
            <div className={technologyCardStyle.cardHeader}>
                <div>
                    <img src={filterIcon} />
                    <p>Python Developers</p>
                </div>
                <img src={threeDotMore} className={technologyCardStyle.threeDotMore} />
            </div>
            <div className={technologyCardStyle.cardBody}>
                <p>Senior Developers</p>
                <div>258</div>
                <p>Total Applicants</p>
            </div>
            <div className={technologyCardStyle.cardFooter}>
                <div>
                    <span>28%</span> VS Last month
                </div>
                <div>
                    6 mins ago
                </div>
            </div>
        </div>
    )
}
