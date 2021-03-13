import React from 'react';

// Component displays job stats: 
// - # days since you've started job searching
// - # jobs you've applied to
// - # job apps you're waiting on a reply from
// - # job rejections
// - % of jobs you've been rejected from
const Stats = ({ jobs }) => {
    return <div id='statsContainer'>
        <h3>Job Application Stats</h3>
        <div id='jobStats'>
            <div>
                <div># Days Searching</div>
                <span id='jobSearchingDays'>0</span>
            </div>
            <div>
                <div># Applied:</div>
                <span id='numbApplied'>0</span>
            </div>
            <div>
                <div># Waiting on:</div>
                <span id='numbWaiting'>0</span>
            </div>
            <div>
                <div># Rejections:</div>
                <span id='numbRejections'>0</span>
            </div>
            <div>
                <div>Rejection Rate:</div>
                <span id='rejections'>0</span>%
            </div>

        </div>
    </div>
}

export default Stats;