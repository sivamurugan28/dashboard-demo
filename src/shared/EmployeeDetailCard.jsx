import React from 'react';
import employeeDetailStyle from "../styles/EmployeeDetailCard.module.scss";
import calender from "../assets/dashboard/side-menu/calender-icon.svg";
import clockIcon from "../assets/dashboard/side-menu/clock-icon.svg";

import profileImage from "../assets/dashboard/profile-1.jpg";


export default function EmployeeDetailCard() {
    return (
        <div className={employeeDetailStyle.employeeCardContainer}>
            <div className={employeeDetailStyle.employeeProfileContainer}>
                <div className={employeeDetailStyle.employeeProfile}>
                    <img src={profileImage} className={employeeDetailStyle.profileImage} />
                    <p className={employeeDetailStyle.profileName}>John Smith</p>
                    <p className={employeeDetailStyle.profilePosition}>Senior Python Developer</p>
                </div>
                <div className={employeeDetailStyle.employeeMeetingDateAndTiming}>
                    <div>
                        <img src={calender} className={employeeDetailStyle.calenderIcon} />
                        <p>19th Feb 2024</p>
                    </div>
                    <div>
                        <img src={clockIcon} className={employeeDetailStyle.calenderIcon} />
                        <p>19th Feb 2024</p>
                    </div>
                </div>
            </div>
            <div className={employeeDetailStyle.employeeInterviewStatus}>
                <div className={employeeDetailStyle.employeeInterviewStatusGrid}>
                    <div className={employeeDetailStyle.employeeInterviewStatusLeft}>
                        <div>1st Level:    7/10</div>
                        <div>2nd Level:    6/10</div>
                        <div>3rd Level:    Waiting</div>
                        <div>Meet Via:     G-Meet</div>
                    </div>
                    <div className={employeeDetailStyle.employeeInterviewStatusRight}>
                        <div>Interviewer:   Stella</div>
                        <div>Interviewer:   Stella</div>
                        <div>Interviewer:   Stella</div>
                        <div>Interviewer:   Stella</div>
                    </div>
                </div>
                <div className={employeeDetailStyle.employeeInterviewStatusActions}>
                    <div>Reschedule Meeting</div>
                    <div>Join Meeting</div>
                </div>

            </div>

        </div>
    )
}
