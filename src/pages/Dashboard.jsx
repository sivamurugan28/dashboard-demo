import React from 'react'
import dashboardStyle from "../styles/dashboard.module.scss";
import NavigationBar from '../shared/NavigationBar';
import Sidemenu from '../shared/Sidemenu';
import { Button } from '@mui/material';
import BarChartGraph from '../shared/Barchart';
import SelectComponent from '../shared/SelectComponent';
import notePad from "../assets/dashboard/side-menu/notePad.svg";
import ladyAvatar from "../assets/dashboard/avatar-logo.png";
import threeDotMore from "../assets/dashboard/side-menu/threeDotMore.svg";
import EmployeeDetailCard from '../shared/EmployeeDetailCard';
import searchIcon from "../assets/dashboard/searchIcon.png";
import filterIcon from "../assets/dashboard/side-menu/filter-icon.svg";
import TechnologyCard from '../shared/TechnologyCard';
import { DataTable } from '../shared/DataTable';
import profileImage from "../assets/dashboard/profile-1.jpg";


export default function Dashboard() {
    return (
        <div className={dashboardStyle.mainContainer}>
            <NavigationBar />
            <div className={dashboardStyle.dashboardDetailsContainer}>
                <Sidemenu />
                <div className={dashboardStyle.dashboardActions}>
                    <div className={dashboardStyle.dashboardActionHeader}>
                        <div className={dashboardStyle.dashboardActionHeaderTitle}>
                            <p>HR Employee</p>
                            <p>Enjoy your selecting potential candidates Tracking and Management System.</p>
                        </div>
                        <div className={dashboardStyle.taskDetailBtn}>
                            <Button variant='contained'>Task Details</Button>
                        </div>
                    </div>
                    <div className={dashboardStyle.graphContainer}>
                        <div className={dashboardStyle.applicationInfoContainer}>
                            <div className={dashboardStyle.graphHeaderContainer}>
                                <div className={dashboardStyle.graphTitleContainer}>
                                    <p>Application’s  Info</p>
                                    <div className={dashboardStyle.colorIndentifier}>
                                        <span></span>
                                        Received
                                    </div>
                                    <div className={dashboardStyle.colorIndentifier}>
                                        <span></span>
                                        Processed
                                    </div>
                                </div>
                                <div className={dashboardStyle.monthFilter}>
                                    <SelectComponent />
                                </div>
                            </div>
                            <BarChartGraph />
                        </div>
                        <div className={dashboardStyle.graphAssesment}>
                            <div className={dashboardStyle.graphAssesmentCount}>
                                <div className={dashboardStyle.graphAssesmentNotePad}>
                                    <div className={dashboardStyle.notePadIconCotainer}>
                                        <img src={notePad} className={dashboardStyle.notePadIcon} />
                                    </div>
                                    <p>0033</p>
                                </div>
                                <div className={dashboardStyle.ladyAvatarContainer}>
                                    <img src={ladyAvatar} className={dashboardStyle.ladyAvatarSmallStyle} />
                                    <img src={ladyAvatar} className={dashboardStyle.ladyAvatarStyle} />
                                </div>
                            </div>
                            <div className={dashboardStyle.graphAssesmentViewDetails}>
                                <p>New Assessment's</p>
                                <div>
                                    VIEW DETAILS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={dashboardStyle.userMatchingContainer}>
                        <div className={dashboardStyle.userMatchingLeft}>
                            <div className={dashboardStyle.meetingInformationDetail}>
                                <div className={dashboardStyle.meetingInformationDetailHeader}>
                                    <p>Today Interviews Meetings Info</p>
                                    <div>
                                        <img src={threeDotMore} className={dashboardStyle.threeDotMore} />
                                    </div>
                                </div>
                                <div className={dashboardStyle.employeeProfileDetailContainer}>
                                    <EmployeeDetailCard />
                                    <EmployeeDetailCard />
                                    <EmployeeDetailCard />
                                </div>
                            </div>
                            <div className={dashboardStyle.postedJobsContainer}>
                                <div className={dashboardStyle.postedJobsHeader}>
                                    <div>
                                        <p>Posted Jobs</p>
                                        <p>View all</p>
                                    </div>
                                    <div className={dashboardStyle.searchBarContainer}>
                                        <div className={dashboardStyle.searchBar}>
                                            <input placeholder='Search' />
                                            <img src={searchIcon} />
                                        </div>

                                        <div className={dashboardStyle.filterBtn}>
                                            <img src={filterIcon} />
                                            <p>Filter</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={dashboardStyle.jobStatusContainer}>
                                    <p>Active Jobs</p>
                                    <p>Pending Jobs</p>
                                </div>
                                <div className={dashboardStyle.jobVancanyCountContainer}>
                                    <TechnologyCard />
                                    <TechnologyCard />
                                    <TechnologyCard />
                                    <TechnologyCard />
                                </div>
                            </div>
                            <div className={dashboardStyle.postedJobsContainer}>
                                <div className={dashboardStyle.postedJobsHeader}>
                                    <div>
                                        <p>Candidate Status</p>
                                        <p>View all</p>
                                    </div>
                                    <div className={dashboardStyle.searchBarContainer}>
                                        <div className={dashboardStyle.searchBar}>
                                            <input placeholder='Search' />
                                            <img src={searchIcon} />
                                        </div>

                                        <div className={dashboardStyle.filterBtn}>
                                            <img src={filterIcon} />
                                            <p>Filter</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={dashboardStyle.dataTableContainer}>
                                    <DataTable />
                                </div>
                            </div>
                        </div>
                        <div className={dashboardStyle.userMatchingRight}>
                            <div className={dashboardStyle.upComingDetail}>
                                <div className={dashboardStyle.upComingHeaderDetail}>
                                    <p>Upcomings</p>
                                    <p>View All</p>
                                </div>
                                <div className={dashboardStyle.upComingDetailList}>
                                    {
                                        [...Array(3).keys()].map(() => {
                                            return (
                                                <div className={dashboardStyle.upComingDetailCard}>
                                                    <div className={dashboardStyle.upComingDetailCardDetail}>
                                                        <div className={dashboardStyle.upComingDetailCardDate}>
                                                            <p>07</p>
                                                            <p>Feb</p>
                                                        </div>
                                                        <div className={dashboardStyle.upComingDetailCardContent}>
                                                            <p>Interview with Designer</p>
                                                            <p>Created by Stella</p>
                                                            <p>10 A.M to 11 A.M</p>
                                                        </div>
                                                    </div>
                                                    <div className={dashboardStyle.upComingDetailBtn}>
                                                        Detail
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={dashboardStyle.activityDetail}>
                                <div className={dashboardStyle.upComingHeaderDetail}>
                                    <p>Activity</p>
                                    <p>View All</p>
                                </div>
                                <div className={dashboardStyle.upComingDetailList}>
                                    {
                                        [...Array(3).keys()].map(() => {
                                            return (
                                                <div className={dashboardStyle.upComingDetailCard}>
                                                    <div className={dashboardStyle.upComingDetailCardDetail} style={{ alignItems: "center" }}>
                                                        <img src={profileImage} className={dashboardStyle.profileImage} />
                                                        <div className={dashboardStyle.upComingDetailCardContent}>
                                                            <p>John Doe [Python Developer]</p>
                                                            <p>Interview with Stella</p>
                                                            <p>15 mins ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={dashboardStyle.activityDetail}>
                                <div className={dashboardStyle.upComingHeaderDetail}>
                                    <p>Hiring Candidates</p>
                                    <p>View All</p>
                                </div>
                                <div className={dashboardStyle.upComingDetailList}>
                                    {
                                        [...Array(3).keys()].map(() => {
                                            return (
                                                <div className={dashboardStyle.upComingDetailCard}>
                                                    <div className={dashboardStyle.upComingDetailCardDetail} style={{ alignItems: "center" }}>
                                                        <img src={profileImage} className={dashboardStyle.profileImage} />
                                                        <div className={dashboardStyle.upComingDetailCardContent}>
                                                            <p>John Doe</p>
                                                            <p>Senior Python Develpper</p>
                                                            <p>Hired by: Stella</p>
                                                        </div>
                                                    </div>
                                                    <div className={dashboardStyle.upComingDetailBtn} style={{ background: "transparent", color: "blue", border: "1px solid blue" }}>
                                                        Detail
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
