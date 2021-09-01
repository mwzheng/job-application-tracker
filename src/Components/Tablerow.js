import React, { useState } from 'react';

// Component creates an individual row in the table for a single job application
const Tablerow = ({ jobs, setJobs, number, name, date, location, link, status, progress, setShowUpdateModal, setJobAppToUpdate }) => {
    const [disableProgress, setDisableProgress] = useState(status === 'Rejected');
    let appStatus = (status === "Applied") ? 'applied' : 'rejected';
    let jobAppIndex = number - 1; // Index of job App in jobs array
    let jobList = JSON.parse(jobs);
    progress = (progress) ? progress : 'Waiting';

    // Opens job application link in a new tab
    const openLink = (jobLink) => {
        window.open(jobLink, '_blank');
    }

    const changeProgress = () => {
        let newJobList = jobList;
        let job = newJobList[jobAppIndex];

        job.progress = (progress === 'In Progress') ? "Waiting" : 'In Progress';

        newJobList[jobAppIndex] = job;
        updateJobList(newJobList);
    }

    const changeStatus = () => {
        let updatedJob = jobList[jobAppIndex];
        let newJobList = jobList;

        setDisableProgress(status === 'Applied');
        updatedJob.status = (status === 'Rejected') ? "Applied" : "Rejected";

        newJobList[jobAppIndex] = updatedJob;
        updateJobList(newJobList);
    }

    const deleteJobApp = (number) => {
        // Remove the job app with number from the list
        let updatedJobList = jobList.filter(aJobApp => aJobApp.number !== number);
        let jobNumber = 1;

        // Re-index # for each job in the list
        updatedJobList = updatedJobList.map(aJobApp => {
            aJobApp.number = jobNumber;
            jobNumber++;
            return aJobApp;
        })

        updateJobList(updatedJobList);
    }

    // Update job list state & localstorage data
    const updateJobList = (updatedList) => {
        let newJobList = JSON.stringify(updatedList);
        setJobs(newJobList);
        localStorage.setItem('jobAppList', newJobList);
    }

    const editJobApp = () => {
        setShowUpdateModal(true);
        setJobAppToUpdate(number - 1)
    }

    return (
        <tr key={number}>
            <td className='edit'>
                <button className='editBttn' onClick={e => editJobApp()}>
                    <i className="fa fa-edit" aria-hidden="true"></i>
                </button>
            </td>
            <td className='number'>
                {number}
            </td>
            <td className='date'>
                {date}
            </td>
            <td className='companyName'>
                {name}
            </td>
            <td className='jobLocation'>
                {location}
            </td>
            <td className='link'>
                <button className='jobLinkButton' onClick={e => openLink(link)}>I</button>
            </td>
            <td className='progress'>
                <button className='progressButton' disabled={disableProgress} onClick={e => changeProgress()}>{progress}</button>
            </td>
            <td className='status'>
                <button className='statusButton' id={appStatus} onClick={e => changeStatus()}>{status}</button>
            </td>
            <td className='delete'>
                <button className='deleteButton' onClick={e => deleteJobApp(number)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </td>
        </tr>
    );
}

export default Tablerow;