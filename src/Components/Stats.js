import React from 'react';

const Stats = ({ jobs }) => {
    return <div id='statsContainer'>
        <h3>Job Application Stats</h3>
        <div id='jobStats'>
            <div>
                <div># Applied:</div>
                <span id='numbApplied'>0</span>
            </div>
            <div>
                <div>Waiting on:</div>
                <span id='numbWaiting'>0</span>
            </div>
            <div>
                <div># Rejections:</div>
                <span id='numbRejections'></span>
            </div>
            <div>
                <div>Rejection Rate:</div>
                <span id='rejections'>0</span>%
            </div>

        </div>
    </div>
}

export default Stats;