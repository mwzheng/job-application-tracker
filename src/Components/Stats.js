import React, { useEffect, useState } from 'react';

// Component displays job stats: 
// - # days since you've started job searching
// - # jobs you've applied to
// - # job apps you're waiting on a reply from
// - # job rejections
// - % of jobs you've been rejected from
const Stats = ({ jobs }) => {
    const jobAppList = JSON.parse(jobs);
    const [jobSearchingDays, setJobSearchingDays] = useState(0);
    const [jobsApplied, setJobsApplied] = useState(0);
    const [jobsWaiting, setJobsWaiting] = useState(0);
    const [jobRejections, setJobRejections] = useState(0);
    const [jobRejectionPercentage, setJobRejectionPercentage] = useState(0);

    const calcJobStats = () => {
        if (jobAppList.length === 0) { // No job apps
            setStats(0, 0, 0, 0, 0);
        } else {
            let numbOfApplications = jobAppList.length;
            let daysOfJobSearching = calcDaysJobSearching();
            let numbOfRejections = jobAppList.filter(anApp => anApp.status === 'Rejected').length;
            let rejectionPercentage = (((numbOfRejections) / numbOfApplications) * 100).toFixed(2);
            let waitingApps = numbOfApplications - numbOfRejections;

            setStats(daysOfJobSearching, numbOfApplications, waitingApps, numbOfRejections, rejectionPercentage);
        }
    }

    const setStats = (daysSearching, totalJobs, jobsWaiting, jobsRejected, rejectionPercentage) => {
        setJobSearchingDays(daysSearching);
        setJobsApplied(totalJobs);
        setJobsWaiting(jobsWaiting);
        setJobRejections(jobsRejected);
        setJobRejectionPercentage(rejectionPercentage);
    }

    const calcDaysJobSearching = () => {
        let daysOfJobSearching = 0;

        if (jobAppList.length !== 0) {
            let dateToday = new Date();
            let earliestAppDate = new Date(jobAppList[0]["date"]);
            daysOfJobSearching = Math.floor((dateToday - earliestAppDate) / (1000 * 60 * 60 * 24)) + 1;
        }

        return daysOfJobSearching;
    }

    useEffect(calcJobStats);

    return <div id='statsContainer'>
        <h3>Job Application Stats</h3>
        <div id='jobStats'>
            <div>
                <div># Days Searching</div>
                <span id='jobSearchingDays'>{jobSearchingDays}</span>
            </div>
            <div>
                <div># Applied:</div>
                <span id='numbApplied'>{jobsApplied}</span>
            </div>
            <div>
                <div># Waiting on:</div>
                <span id='numbWaiting'>{jobsWaiting}</span>
            </div>
            <div>
                <div># Rejections:</div>
                <span id='numbRejections'>{jobRejections}</span>
            </div>
            <div>
                <div>Rejection Rate:</div>
                <span id='rejections'>{jobRejectionPercentage}</span>%
            </div>
        </div>
    </div>
}

export default Stats;