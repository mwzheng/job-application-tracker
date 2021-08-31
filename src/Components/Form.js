import React from 'react';
import { useState } from 'react';

// Component used for form to input new data into the table 
const Form = ({ jobs, setJobs }) => {
    const jobList = JSON.parse(jobs);
    const [jobName, setJobName] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const [jobLink, setJobLink] = useState("");

    // Convert input into title case (Ex: hi there => Hi There)
    const titleCase = (input) => {
        if (input === '') return;
        return input.split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');
    }

    // Capitalizes the state for locations (Ex Herndon, va => Herndon, VA)
    const capitalizeState = (input) => {
        if (input === undefined) return;

        let tokens = input.split(',').map(token => token.trim());

        if (tokens[1])
            tokens[1] = tokens[1].toUpperCase();

        return tokens.join(', ');
    }

    // Adds a new job application to the table
    const addNewJobApp = () => {
        if (jobName === '' || jobLocation === '' || jobLink === '')
            return;

        let name = titleCase(jobName.trim());
        let location = capitalizeState(titleCase(jobLocation.trim()));
        let link = jobLink.trim();

        const newJobApp = {
            "number": jobList.length + 1,
            "name": name,
            "date": new Date().toLocaleDateString(),
            "location": location,
            "link": link,
            "progress": "Waiting",
            "status": "Applied"
        };

        jobList.push(newJobApp);

        let updatedJobAppList = JSON.stringify(jobList);

        localStorage.setItem('jobAppList', updatedJobAppList);

        setJobs(updatedJobAppList);
        clearInputs();
    }

    // Clears out input fields
    const clearInputs = () => {
        setJobName("");
        setJobLocation("");
        setJobLink("");
    }

    return <div className='inputDiv'>
        <label>
            Company Name:
            <input id='companyName' value={jobName} onChange={e => setJobName(e.target.value)}></input>
        </label>
        <label>
            Location:
            <input id='jobLocation' value={jobLocation} onChange={e => setJobLocation(e.target.value)}></input>
        </label>
        <label>
            App Link:
            <input id='appLink' value={jobLink} onChange={e => setJobLink(e.target.value)}></input>
        </label>
        <button id='addJobButton' onClick={addNewJobApp}>Add</button>
    </div >
}

export default Form;