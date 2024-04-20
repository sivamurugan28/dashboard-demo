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

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
