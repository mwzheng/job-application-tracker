import React from 'react';

const Tablerow = ({ jobs, setJobs, number, name, location, link, status }) => {
    let appStatus = status === "Applied" ? 'applied' : 'rejected';
    let jobList = JSON.parse(jobs);

    // Opens job application link in a new tab
    const openLink = (jobLink) => {
        window.open(jobLink, '_blank');
    }

    // Change the status for a single job application
    const changeStatus = (e) => {
        let jobAppNumber = e.target.getAttribute('appnumber') - 1;
        let updateJob = jobList[jobAppNumber];
        updateJob.status = updateJob.status === 'Rejected' ? "Applied" : "Rejected";

        const newJobList = jobList;
        newJobList[jobAppNumber] = updateJob;
        jobList[jobAppNumber] = updateJob;

        let newJobAppList = JSON.stringify(newJobList);
        localStorage.setItem('jobAppList', newJobAppList);
        setJobs(newJobAppList);
    }

    // Deletes the job app from the table
    const deleteJobApp = (number) => {
        // Remove the job app from the list
        let updateJobList = jobList.filter(aJobApp => aJobApp.number !== number);
        let jobNumber = 1;

        // Re-index # for each job in the list
        updateJobList = updateJobList.map(aJobApp => {
            aJobApp.number = jobNumber;
            jobNumber++;
            return aJobApp;
        })

        updateJobList = JSON.stringify(updateJobList);
        setJobs(updateJobList);
        localStorage.setItem('jobAppList', updateJobList);
    }

    return (
        <tr key={number}>
            <td className='number'>{number}</td>
            <td className='date'>{new Date().toLocaleDateString()}</td>
            <td className='companyName'>{name}</td>
            <td className='jobLocation'>{location}</td>
            <td className='link'><button className='jobLinkButton' onClick={e => openLink(link)}>I</button></td>
            <td className='status'><button className='statusButton' id={appStatus} appnumber={number} onClick={e => changeStatus(e)}>{status}</button></td>
            <td className='delete'><button className='deleteButton' onClick={e => deleteJobApp(number)}>x</button></td>
        </tr>
    )
}

export default Tablerow;